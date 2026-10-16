"use server";

import { prisma } from "@/src/lib/prisma-client";
import {
  TaskListModel,
  TaskFormSchema,
  TaskFormModelInput,
  TaskFormModelUpdate,
  TaskUpdateSchema,
} from "@/src/schema/task.schema";
import { ActionResponse } from "@/src/schema/auth.schema";
import { withAuth } from "@/src/lib/utils/validation-wrapper";
import { revalidatePath } from "next/cache";
import { DateRepeatType, Prisma } from "@/src/generated/prisma";
import { getErrorMessage } from "@/lib/errors";
import { ListParams } from "../type/data-list";

export async function GetUserTasks({
  category,
  searchText,
  filter,
  groupBy,
}: ListParams): Promise<ActionResponse<TaskListModel[]>> {
  try {
    const rawTaskData = await withAuth(async (userId) => {
      const data = await prisma.task_category.findMany({
        where: {
          user_id: userId,
          ...(category ? { id: category } : {}),
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
            id: String(task.id ?? ""),
            title: task.title ?? "",
            description: task.description ?? "",
            completed: task.completed,
            category: TaskListModel.title,
            priority_level: 0,
            repeating_type: isValidEnum
              ? (task.repeating_type as DateRepeatType)
              : DateRepeatType.MANUAL, // Default to Manual if not valid
          };
        }),
    );

    return {
      success: true,
      data: flattenedTasks,
    };
  } catch (error) {
    console.error("Error fetching user tasks:", error);
    return {
      success: false,
      error: getErrorMessage(error),
    };
  }
}

export async function CreateTask(
  data: TaskFormModelInput,
): Promise<ActionResponse<{ message: string }>> {
  const { data: parsedTask, error } = TaskFormSchema.safeParse(data);
  if (error) {
    return { success: false, error: "Invalid task data" };
  }

  return await withAuth(async (user_id) => {
    try {
      await prisma.task_category.update({
        where: {
          user_id: user_id,
          id: parsedTask.category_id,
        },
        data: {
          task: {
            create: {
              title: parsedTask.title ?? "",
              description: parsedTask.description ?? "",
              completed: parsedTask.completed!,
              priority_level: parsedTask.priority_level,
              repeating_type:
                parsedTask.repeating_type ?? DateRepeatType.MANUAL,
              due_date: parsedTask.due_date
                ? new Date(parsedTask.due_date)
                : null,
              expense_id: parsedTask.expense_id ?? null,
            },
          },
        },
      });

      revalidatePath("/tasks");

      return {
        success: true,
        data: { message: "Task created successfully" },
      };
    } catch (error) {
      console.error("Error creating task:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  });
}

export async function UpdateTaskCompletion(taskId: string) {
  const res = await withAuth(async (userId) => {
    try {
      const existingTask = await prisma.task.findUnique({
        where: {
          id: taskId,
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
          error: `Task not found: ${taskId}`,
        };
      }

      const res = await prisma.task.update({
        where: {
          id: taskId,
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
        error: getErrorMessage(error),
      };
    }
  });
  // if (res) {
  //   revalidatePath("/(dashboard)/tasks");
  // }
}

export async function DeleteTask(taskId: string) {
  return withAuth(async (userId) => {
    try {
      // const task = await prisma.task.findUnique({
      //   select: { id: true },
      //   where: { id: tasknum },
      // });

      // if (!task) {(`Task not found: ${taskID}`);}

      const res = await prisma.task.update({
        where: {
          id: taskId,
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

      // revalidatePath("/(dashboard)/tasks");
      return {
        success: true,
        data: res,
      };
    } catch (error) {
      console.error("Error occurred while deleting task:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  });
}

export async function getTaskByID(
  taskId: string,
): Promise<ActionResponse<TaskListModel>> {
  return withAuth(async (userId) => {
    try {
      const task = await prisma.task.findUnique({
        where: { id: taskId, task_category: { user_id: userId } },
        include: {
          task_category: true,
        },
      });

      if (!task) {
        console.error(`Task not found: ${taskId}`);
        return {
          success: false,
          error: `Task not found: ${taskId}`,
        };
      }
      return {
        success: true,
        data: {
          id: task.id,
          title: task.title,
          description: task.description || "",
          completed: task.completed,
          category: task.task_category.title,
          priority_level: 0,
          repeating_type: DateRepeatType.MANUAL, // Default to Manual if not provided
        },
      };
    } catch (error) {
      console.error("Error occurred while fetching task by ID:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  });
}

export async function updateTask(
  data: TaskFormModelUpdate,
): Promise<ActionResponse<{ message: string }>> {
  const parsedTask = await TaskUpdateSchema.safeParseAsync(data);
  if (!parsedTask.success || !data.id) {
    return { success: false, error: "" };
  }

  return withAuth(async (userId) => {
    try {
      const cat = await prisma.task_category.findFirst({
        where: { id: data.category_id, user_id: userId },
        select: { id: true },
      });
      if (!cat) return { success: false, error: "Category not found" };

      const res = await prisma.task.update({
        where: {
          id: data.id,
          task_category: {
            user_id: userId,
          },
        },
        data: {
          title: data.title,
          description: data.description,
          completed: data.completed,
          priority_level: data.priority_level,
          repeating_type: data.repeating_type,
          due_date: data.due_date ? new Date(data.due_date) : null,
          task_category_id: data.category_id,
        },
      });

      if (!res) {
        return { success: false, error: "" };
      }

      // revalidatePath("/(dashboard)/tasks");
      return {
        success: true,
        data: {
          message: "",
        },
      };
    } catch (error) {
      console.error("Error updating task:", error);
      return { success: false, error: getErrorMessage(error) };
    }
  });
}
