"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  TaskListModel,
  TaskFormSchema,
  TaskFormModelInput,
  TaskFormModelUpdate,
  TaskFormModelBase,
} from "@/src/schema/task.schema";
import { ActionResponse } from "@/src/schema/auth.schema";
import { authenticateUser } from "@/src/lib/utils/validation-wrapper";
import { revalidatePath } from "next/cache";
import { DateRepeatType, Prisma } from "@/src/generated/prisma";
import { ReturnErrorMessage } from "@/src/hook/ReturnErrorMessage";
import { ListParams } from "../type/data-list";
import { success } from "zod";

export async function GetUserTasks({
  category,
  searchText,
  filter,
  groupBy,
}: ListParams): Promise<ActionResponse<TaskListModel[]>> {
  try {
    const rawTaskData = await authenticateUser(async (userId) => {
      const data = await prisma.task_category.findMany({
        where: {
          user_id: userId,
          ...(category ? { id: Number(category) } : {}),
        },
        select: {
          title: true,
          task: {
            where: {
              is_archived: false,
              ...(searchText
                ? {
                    title: { contains: searchText, mode: "insensitive" },
                  }
                : {}),
            },
            orderBy: {
              completed: "asc",
            },
          },
        },
      });

      return {
        success: true,
        data: data,
      };
    });

    if (!rawTaskData.success) {
      return {
        success: false,
        error: rawTaskData.error || "Failed to fetch tasks",
      };
    }

    const flattenedTasks: TaskListModel[] = rawTaskData.data.flatMap(
      (TaskListModel) =>
        TaskListModel.task.map((task) => {
          const isValidEnum = Object.values(DateRepeatType).includes(
            task.repeating_type as DateRepeatType,
          );
          return {
            id: task.id!.toString()!,
            title: task.title!,
            description: task.description!,
            completed: task.completed!,
            category: TaskListModel.title!,
            priority_level: 0,
            repeating_type: isValidEnum
              ? (task.repeating_type as DateRepeatType)
              : DateRepeatType.MANUAL, // Default to Manual if not valid
          };
        }),
    );

    const parsedTasks: TaskListModel[] = flattenedTasks.map(
      (task: TaskListModel) => ({
        id: task.id!.toString(),
        title: task.title!,
        description: task.description!,
        completed: task.completed!,
        category: task.category!,
        priority_level: task.priority_level!,
        repeating_type: task.repeating_type,
      }),
    );

    return {
      success: true,
      data: parsedTasks,
    };
  } catch (error) {
    const e = ReturnErrorMessage(error);

    return {
      success: false,
      error: e,
    };
  }
}

export async function CreateTask(
  data: TaskFormModelInput,
): Promise<ActionResponse<TaskFormModelBase>> {
  const { data: parsedTask, error } = TaskFormSchema.safeParse(data);

  if (error) {
    return { success: false, error: "Invalid task data" };
  }
  try {
    const authResult = await authenticateUser(async (user_id) => {
      const category = await prisma.task_category.findFirst({
        where: {
          user_id: user_id,
        },
        select: {
          id: true,
        },
      });

      if (!category) {
        return { success: false, error: "Unauthorized or invalid category." };
      }

      const newTask = await prisma.task.create({
        data: {
          title: parsedTask.title ?? "",
          description: parsedTask.description ?? "",
          completed: parsedTask.completed!,
          task_category_id: parsedTask.category_id,
          priority_level: parsedTask.priority_level,
          repeating_type: parsedTask.repeating_type!,
          due_date: parsedTask.due_date,
        },
      });
      return {
        success: true,
        data: newTask,
      };
    });

    if (!authResult.success) {
      return {
        success: false,
        error: authResult.error || "Authentication failed",
      };
    }

    revalidatePath("/(dashboard)/tasks");

    return {
      success: true,
      data: {
        title: authResult.data.title ?? "",
        description: authResult.data.description ?? "",
        completed: authResult.data.completed!,
        priority_level: parsedTask.priority_level,
        repeating_type: parsedTask.repeating_type!,
        due_date: parsedTask.due_date,
      },
    };
  } catch (error) {
    const e = ReturnErrorMessage(error);
    return {
      success: false,
      error: e,
    };
  }
}

export async function UpdateTaskCompletion(taskID: string) {
  const tasknum = parseInt(taskID);
  if (isNaN(tasknum)) {
    return {
      success: false,
      error: `Invalid task ID: ${taskID}`,
    };
  }
  const res = await authenticateUser(async (userId) => {
    try {
      const existingTask = await prisma.task.findUnique({
        where: {
          id: tasknum,
          task_category: {
            user_id: userId,
          },
        },
        select: {
          completed: true,
        },
      });

      if (!existingTask) {
        return {
          success: false,
          error: `Task not found: ${taskID}`,
        };
      }

      const res = await prisma.task.update({
        where: {
          id: tasknum,
          task_category: {
            user_id: userId,
          },
        },
        data: { completed: !existingTask.completed },
      });

      return {
        success: true,
        data: res,
      };
    } catch (error) {
      console.error("Error occurred while updating task completion:", error);
      return {
        success: false,
        error: "Error occurred while updating task completion",
      };
    }
  });
  if (res) {
    revalidatePath("/(dashboard)/tasks");
  }
}

export async function DeleteTask(taskID: string) {
  return authenticateUser(async (userId) => {
    const tasknum = parseInt(taskID, 10);
    if (isNaN(tasknum)) {
      return {
        success: false,
        error: `Invalid task ID: ${taskID}`,
      };
    }
    try {
      // const task = await prisma.task.findUnique({
      //   select: { id: true },
      //   where: { id: tasknum },
      // });

      // if (!task) {(`Task not found: ${taskID}`);}

      const res = await prisma.task.update({
        where: {
          id: tasknum,
          task_category: {
            user_id: userId,
          },
        },
        data: { is_archived: true },
      });

      if (!res) {
        return {
          success: false,
          error: "e",
        };
      }

      revalidatePath("/(dashboard)/tasks");
      return {
        success: true,
        data: res,
      };
    } catch (error) {
      console.error("Error occurred while deleting task:", error);
      return {
        success: false,
        error: "e",
      };
    }
  });
}

export async function GetTaskByID(
  taskID: string,
): Promise<ActionResponse<TaskListModel>> {
  try {
    const tasknum = parseInt(taskID, 10);
    if (isNaN(tasknum)) {
      return {
        success: false,
        error: "`Invalid task ID: ${taskID}`",
      };
    }

    const task = await prisma.task.findUnique({
      where: { id: tasknum },
    });

    if (!task) {
      return {
        success: false,
        error: `Task not found: ${taskID}`,
      };
    }
    return {
      success: true,
      data: {
        id: task.id!.toString(),
        title: task.title!,
        description: task.description!,
        completed: task.completed!,
        category: "",
        priority_level: 0,
        repeating_type: DateRepeatType.MANUAL, // Default to Manual if not provided
      },
    };
  } catch (error) {
    console.error("Error occurred while fetching task by ID:", error);
    return {
      success: false,
      error: "Failed to fetch task by ID",
    };
  }
}

export async function UpdateTask(
  data: TaskFormModelUpdate,
): Promise<ActionResponse<{ message: string }>> {
  const tasknum = parseInt(data.id, 10);
  const parsedTask = await TaskFormSchema.safeParseAsync(data);
  if (!parsedTask.success || !tasknum) {
    return { success: false, error: "" };
  }

  return authenticateUser(async (userId) => {
    try {
      const res = await prisma.task.update({
        where: {
          id: tasknum,
          task_category: {
            user_id: userId,
          },
        },
        data: {
          title: data.title,
          description: data.description,
          completed: data.completed,
        },
      });

      if (!res) {
        return { success: false, error: "" };
      }

      revalidatePath("/(dashboard)/tasks");
      return {
        success: true,
        data: {
          message: "",
        },
      };
    } catch (error) {
      ("Failed to update task");
      return { success: false, error: "" };
    }
  });
}
