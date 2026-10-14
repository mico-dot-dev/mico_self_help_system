"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateCategory } from "@/src/actions/category.action";
import {
  CategorySchema,
  CategoryFormModel,
} from "@/src/schema/category.schema";
import Swal from "sweetalert2";
import { Button } from "../ui/Button";
import { FormField } from "../ui/FormField";

interface AddFormProps {
  closeModal: () => void;
  id: string | null;
}

function TaskCatForm({ closeModal, id }: AddFormProps) {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      title: "",
    },
  });

  async function CategorySubmit(data: CategoryFormModel) {
    const res = await CreateCategory(data);

    if (res.success) {
      reset();
      closeModal();
      Swal.fire({
        icon: "success",
        title: "Category Created",
        text: "Your category has been created successfully.",
      });
    } else {
      console.log("❌ Failed to create category:", res.error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create category.",
      });
    }
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(CategorySubmit)}
    >
      <FormField label="Category Name" {...register("title")} />

      {/* <div className="flex flex-col  gap-2">
        <label htmlFor="category-name">Category Name</label>
        <input
          id="category-name"
          type="text"
          placeholder="Category Name"
          className="input-base p-2"
          {...register("title")}
        />
      </div> */}
      <Button type="submit" variant={"primary"}>
        Add Category
      </Button>
    </form>
  );
}

export default TaskCatForm;
