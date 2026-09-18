import React from "react";
import { DateRepeatType } from "@/src/generated/prisma";
import { useFormContext } from "react-hook-form";
import { DynamicFormModel } from "@/src/schema/expense.schema";
import { upperCaseFormat } from "@/src/lib/utils/formatter";

function BillSubForm() {
  const { register, watch } = useFormContext<DynamicFormModel>();

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="title">Repeating Type</label>
        <select
          id=""
          className="input-base p-2"
          {...register("repeating_type")}
          value={watch("repeating_type")}
        >
          {Object.values(DateRepeatType).map((type) => {
            return (
              <option value={type} key={type}>
                {upperCaseFormat(type)}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="title">Running Bill</label>
        <input
          id="title"
          type="number"
          className="input-base p-2"
          {...register("running_bill", { valueAsNumber: true })}
        />
      </div>
    </>
  );
}

export default BillSubForm;
