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
import { FormField } from "../ui/FormField";
import { Button } from "../ui/Button";

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
        <FormField
          label="Expense Name"
          placeholder="Tricycle"
          {...register("title")}
        />
        {/* 
        <div className="flex flex-col">
          <label htmlFor="title">Expense Name</label>
          <input
            id="title"
            type="text"
            className="input-base p-2"
            {...register("title")}
          />
        </div> */}
        <fieldset className="form-field-container">
          <label htmlFor="description" className="input-label">
            Expense Description
          </label>
          <textarea
            id="description"
            className="input-textarea p-2 h-24 resize-none"
            placeholder="E.G., The list of expense that for tricycle transportation"
            {...register("description")}
          />
        </fieldset>

        <fieldset className="form-field-container">
          <label htmlFor="expense_type" className="input-label">
            Expsense Category
          </label>
          <select
            id="expense_type"
            className="input-select"
            {...register("expense_type")}
          >
            {Object.values(ExpenseType).map((type) => {
              return (
                <option key={type} value={type} className="input-option">
                  {upperCaseFormat(type)}
                </option>
              );
            })}
          </select>
        </fieldset>
        {SubForm && <SubForm />}
        <div className="flex flex-1 items-end">
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default ExpenseForm;
