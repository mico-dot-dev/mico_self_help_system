"use client";
import React, { FormEvent, useEffect } from "react";
import { ExpenseType } from "@/src/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import {
  DynamicFormSchema,
  DynamicFormInputModel,
} from "@/src/schema/expense.schema";
import TransportationSubForm from "@/src/components/form/TransportationSubForm";
import BillSubForm from "./BillSubForm";
import StockSubForm from "./StockSubForm";
import { CreateExpense } from "@/src/actions/expense.action";
import Swal from "sweetalert2";
import { upperCaseFormat } from "@/src/lib/utils/formatter";

interface AddFormProps {
  closeModal: () => void;
}

function ExpenseForm({ closeModal }: AddFormProps) {
  const methods = useForm<DynamicFormInputModel>({
    resolver: zodResolver(DynamicFormSchema),
    defaultValues: {
      title: "",
      description: "",
      expense_type: ExpenseType.MISC,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const curr_type = watch("expense_type");

  const SUB_FORM_REGISTRY: Partial<Record<ExpenseType, React.ComponentType>> = {
    HOUSE: BillSubForm,
    PERSONAL: BillSubForm,
    TRANSPORTATION: TransportationSubForm,
    GROCERY: StockSubForm,
  };

  const SubForm = curr_type ? SUB_FORM_REGISTRY[curr_type] : null;

  async function ExpeneseSubmit(data: DynamicFormInputModel) {
    try {
      const res = await CreateExpense(data);
      if (!res.success) {
        closeModal();
        Swal.fire({
          icon: "error",
          title: "Error adding expense" + res.error,
        });
      }
      closeModal();
      Swal.fire({
        icon: "success",
        title: "Expense Added Successfully",
      });
    } catch (e) {}
  }

  return (
    <FormProvider {...methods}>
      <form
        className="modal-form-base"
        onSubmit={handleSubmit(ExpeneseSubmit, (invalidErrors) => {
          console.log("❌ Form Validation Failed:", invalidErrors);
        })}
      >
        <div className="flex flex-col">
          <label htmlFor="title">Expense Name</label>
          <input
            id="title"
            type="text"
            className="input-base p-2"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Expense Description</label>
          <textarea
            id="description"
            className="input-base p-2 h-24 resize-none"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expense_type">Expsense Category</label>
          <select
            id="expense_type"
            className="input-base p-2"
            {...register("expense_type")}
          >
            {Object.values(ExpenseType).map((type) => {
              return (
                <option key={type} value={type}>
                  {upperCaseFormat(type)}
                </option>
              );
            })}
          </select>
        </div>
        {SubForm && <SubForm />}
        <div className="flex flex-1 items-end">
          <button
            type="submit"
            className="button-base rounded-4xl py-1.5 text-lg flex items-center justify-center font-semibold w-full h-10"
          >
            Add Expense
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default ExpenseForm;
