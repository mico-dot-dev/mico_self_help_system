import React from "react";
import { DateRepeatType } from "@/src/generated/prisma";
import { useFormContext } from "react-hook-form";
import { DynamicFormModel } from "@/src/schema/expense.schema";
import { upperCaseFormat } from "@/src/lib/utils/formatter";
import { FormField } from "../ui/FormField";

function BillSubForm() {
  const { register, watch } = useFormContext<DynamicFormModel>();

  return (
    <>
      <fieldset className="form-field-container">
        <label htmlFor="title" className="input-label">
          Repeating Type
        </label>
        <select
          id=""
          className="input-select p-2"
          {...register("repeating_type")}
          value={watch("repeating_type")}
        >
          {Object.values(DateRepeatType).map((type) => {
            return (
              <option value={type} key={type} className="input-option">
                {upperCaseFormat(type)}
              </option>
            );
          })}
        </select>
      </fieldset>

      <FormField
        label="Running Bill"
        placeholder="1500"
        {...register("running_bill", { valueAsNumber: true })}
      />

      {/* <div className="flex flex-col">
        <label htmlFor="title">Running Bill</label>
        <input
          id="title"
          type="number"
          className="input-base p-2"
          {...register("running_bill", { valueAsNumber: true })}
        />
      </div> */}
    </>
  );
}

export default BillSubForm;
