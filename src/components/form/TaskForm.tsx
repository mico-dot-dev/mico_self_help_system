"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  TaskFormModelBase,
  TaskFormModelInput,
  TaskFormSchema,
  TaskFormModelUpdate,
} from "@/src/schema/task.schema";
import { ActionResponse } from "@/src/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTask, GetTaskByID } from "@/src/actions/task.action";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";
import { GetUserCategory } from "@/src/actions/category.action";
import { CategoryListModel } from "@/src/schema/category.schema";
import { DateRepeatType } from "@/src/generated/prisma";
import { upperCaseFormat } from "@/src/lib/utils/formatter";

interface AddFormProps {
  closeModal: () => void;
}

function TaskForm({ closeModal }: AddFormProps) {
  const searchParams = useSearchParams();
  const taskId = searchParams.get("id");
  const [userCategories, setUserCategories] = useState<CategoryListModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { register, handleSubmit, reset, watch, setValue } =
    useForm<TaskFormModelInput>({
      resolver: zodResolver(TaskFormSchema),
      defaultValues: {
        title: "",
        description: "",
        completed: false,
        priority_level: 0,
        due_date: undefined,
        repeating_type: DateRepeatType.MANUAL,
        category_id: 0,
      },
    });

  const repeatType = watch("repeating_type");
  useEffect(() => {
    if (repeatType !== DateRepeatType.MANUAL) {
      setValue("due_date", undefined, { shouldValidate: true });
    }
  }, [repeatType, setValue]);

  useEffect(() => {
    async function initializeData() {
      setLoading(true);
      try {
        const categoryPromise = GetUserCategory();
        const taskPromise = taskId
          ? GetTaskByID(taskId)
          : Promise.resolve(null);
        const [categories, taskData] = await Promise.all([
          categoryPromise,
          taskPromise,
        ]);

        if (categories.success && categories.data) {
          setUserCategories(categories.data || []);
          if (taskData && taskData.success && taskData.data) {
            reset(taskData.data);
          } else {
            reset({
              title: "",
              description: "",
              completed: false,
              priority_level: 0,
              due_date: undefined,
              repeating_type: DateRepeatType.MANUAL,
              category_id:
                categories.data.length > 0 ? categories.data[0].id : 0,
            });
          }
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    initializeData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (userCategories.length === 0) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-muted-text">
          You need to create a category before adding tasks.
        </p>
      </div>
    );
  }

  async function TaskSubmit(data: TaskFormModelInput) {
    try {
      let res: ActionResponse<TaskFormModelBase>;

      const createData: TaskFormModelInput = {
        ...data,
      };
      res = await CreateTask(createData);

      if (!res.success) {
        return {
          success: false,
          error: res.error || "An error occurred while saving the task.",
        };
      }
      closeModal();
      Swal.fire({
        icon: "success",
        title: "Task Added Successfully",
      });
    } catch (error) {
      console.error("Error submitting task:", error);
      closeModal();

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while saving the task.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(TaskSubmit)} className="modal-form-base">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="task-title">Task Title</label>
          <input
            {...register("title")}
            required
            id="task-title"
            type="text"
            placeholder="Task Title"
            className="input-base p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="priority_level">Priority Level</label>
          <input
            {...register("priority_level", { valueAsNumber: true })}
            required
            id="priority_level"
            type="number"
            placeholder="Priority Level"
            className="input-base p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="task-description">Task Description</label>
          <textarea
            {...register("description")}
            id="task-description"
            placeholder="Task Description"
            className="input-base resize-none p-2 h-24"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="task-category">Category</label>
          <select
            {...register("category_id", { valueAsNumber: true })}
            id="task-category"
            className="input-base p-2"
            required
          >
            {userCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="repeating_type">Repeating Type</label>
          <select
            id=""
            className="capitalize input-base p-2"
            {...register("repeating_type")}
            value={watch("repeating_type")}
          >
            {Object.values(DateRepeatType).map((type) => {
              return (
                <option key={type} value={type}>
                  {upperCaseFormat(type)}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {repeatType === DateRepeatType.MANUAL && (
        <div className="flex flex-col">
          <label htmlFor="">Due Date</label>
          <input
            type="date"
            className="input-base p-2"
            {...register("due_date", { valueAsDate: true })}
          />
        </div>
      )}

      <div className="flex flex-1 items-end">
        <button
          type="submit"
          className="button-base rounded-4xl py-1.5 text-lg flex items-center justify-center font-semibold w-full h-10"
        >
          {taskId ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
