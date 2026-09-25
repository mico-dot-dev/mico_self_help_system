import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  incomeInputModel,
  incomeSchema,
  incomeListModel,
} from "@/src/schema/income.schema";
import { createIncome } from "@/src/actions/income.action";
import Swal from "sweetalert2";
import { FormField } from "../ui/FormField";
import { Button } from "../ui/Button";

interface AddFormProps {
  closeModal: () => void;
}

function IncomeForm({ closeModal }: AddFormProps) {
  const methods = useForm<incomeInputModel>({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      fromJob: false,
    },
  });

  const { register, handleSubmit } = methods;

  async function IncomeSubmit(data: incomeInputModel) {
    await Swal.showLoading();
    const res = await createIncome(data);
    if (!res.success) {
      await Swal.fire({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
      });
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(IncomeSubmit, (invalidErrors) => {
          console.log("❌ Form Validation Failed:", invalidErrors);
        })}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-row">
          <FormField
            label="Amount"
            {...register("amount", { valueAsNumber: true })}
          />
          <fieldset className="">
            <label htmlFor="">Came from Job</label>
            <input type="checkbox" {...register("fromJob")} />
          </fieldset>
        </div>
        <FormField
          label="Date Obtained"
          type="date"
          {...register("dateObtained", { valueAsDate: true })}
        />
        {/* <fieldset>
          <label htmlFor="">Amount</label>
          <input type="text" {...register("amount", { valueAsNumber: true })} />
        </fieldset> */}

        {/* <fieldset>
          <label htmlFor="">Date obtained</label>
          <input
            type="date"
            {...register("dateObtained", { valueAsDate: true })}
          />
        </fieldset> */}

        <Button type="submit" variant={"primary"}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}

export default IncomeForm;
