"use client";

import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  expenseIconMap,
  expenseIconProps,
} from "@/src/lib/utils/expense-mapper";
import { ExpenseType, TransactionStatus } from "@/src/generated/prisma";
import {
  TransactionFormModel,
  TransactionSchema,
  TransactionListModel,
} from "@/src/schema/transaction.schema";
import { DynamicListModel } from "@/src/schema/expense.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetUserExpenseByType } from "@/src/actions/expense.action";
import ExpenseTypeCard from "@/src/components/transaction/TransactionFormCard";
import { twJoin } from "tailwind-merge";
import { CreateUserTransaction } from "@/src/actions/transaction.action";
import Swal from "sweetalert2";
import TransactionExpenseCard from "@/src/components/transaction/TransactionExpenseCard";
import { Stepper } from "@/src/components/ui/Steps";
import { FormField } from "../ui/FormField";
import { Button } from "../ui/Button";

interface AddFormProps {
  closeModal: () => void;
}
const STEPS = ["Expense Type", "Select Item", "Amount"];

function TransactionForm({ closeModal }: AddFormProps) {
  const methods = useForm<TransactionFormModel>({
    resolver: zodResolver(TransactionSchema),
    defaultValues: {
      name: "",
      expense_type: ExpenseType.MISC,
      amount: 1,
      price: 0,
      due_date: undefined,
      expense_id: "0",
      status: TransactionStatus.PENDING,
    },
  });

  const { register, watch, setValue, handleSubmit } = methods;
  const selectedExpenseType = watch("expense_type");
  const selectedExpenseId = watch("expense_id");

  const [expenseData, setExpenseData] = useState<DynamicListModel[]>();

  const [step, setStep] = useState(1);
  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 3));
  };
  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    if (step === 2) {
      const fetchExpenseData = async () => {
        const res = await GetUserExpenseByType(selectedExpenseType);
        if (!res.success) return null;
        setExpenseData(res.data);
      };
      fetchExpenseData();
    }
  }, [step]);

  const formSubmit = async (data: TransactionListModel) => {
    const res = await CreateUserTransaction(data);
    if (!res.success) alert(res.error);

    await Swal.fire({
      icon: "success",
      title: "Transaction Made",
      text: "nice",
    });
  };

  const onInvalid = (errors: any) => {
    console.log("❌ Form Validation Failed:", errors);
  };

  return (
    <div className="h-full flex flex-col gap-5">
      <div className="">
        <Stepper steps={STEPS} currentStep={step} />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(formSubmit, onInvalid)}
          className="flex flex-col flex-1 gap-5"
        >
          <div className="flex-1 h-full">
            {/* Step 1 */}
            {step === 1 && (
              <fieldset className="flex flex-col gap-3">
                {Object.entries(expenseIconMap).map(([typeKey, config]) => {
                  const convertedType = typeKey as ExpenseType;
                  const isSelected = convertedType === selectedExpenseType;
                  return (
                    <ExpenseTypeCard
                      key={typeKey}
                      expenseType={convertedType}
                      iconConfig={config}
                      isSelected={isSelected}
                      onSelectType={(expense) =>
                        setValue("expense_type", expense)
                      }
                    />
                  );
                })}
              </fieldset>
            )}
            {/* Showcases the Expenses of the chosen expense type */}
            {step === 2 && (
              <fieldset>
                {expenseData ? (
                  <div className="flex flex-col gap-3">
                    {expenseData.map((data) => {
                      const isSelected = data.id === selectedExpenseId;
                      return (
                        <TransactionExpenseCard
                          key={data.id}
                          data={data}
                          isSelected={isSelected}
                          onSelectType={(id) =>
                            setValue("expense_id", id.toString())
                          }
                        />
                      );
                    })}
                  </div>
                ) : (
                  <p>No Expense Data for this Type</p>
                )}
              </fieldset>
            )}
            {step === 3 && (
              <fieldset className="flex flex-col">
                <FormField
                  label="Amount"
                  {...register("amount", { valueAsNumber: true })}
                  type="number"
                />
                <FormField
                  label="Price"
                  {...register("price", { valueAsNumber: true })}
                  type="number"
                />
                {/* <label htmlFor="">Amount</label>
                <input
                  type="number"
                  {...register("amount", { valueAsNumber: true })}
                /> */}
                {/* <label htmlFor="">Price</label>
                <input
                  type="number"
                  {...register("price", { valueAsNumber: true })}
                /> */}
              </fieldset>
            )}
          </div>

          <footer className="justify-between w-full flex ">
            {step > 1 ? (
              <Button
                type="button"
                onClick={prevStep}
                variant={"secondary"}
                className="w-fit"
              >
                Back
              </Button>
            ) : (
              <Button
                type="button"
                onClick={closeModal}
                variant={"secondary"}
                className="w-fit"
              >
                Close
              </Button>
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                variant={"primary"}
                className="w-fit"
              >
                Next
              </Button>
            ) : (
              <Button type="submit" variant={"primary"} className="w-fit">
                Submit
              </Button>
            )}
          </footer>
        </form>
      </FormProvider>
    </div>
  );
}

export default TransactionForm;
