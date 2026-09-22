"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { DynamicFormModel } from "@/src/schema/expense.schema";
import { Plus, Trash } from "lucide-react";
import { Button } from "../ui/Button";
import { FormField } from "../ui/FormField";

function TransportationSubForm() {
  const { register, control } = useFormContext<DynamicFormModel>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cost_list",
  });

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <label htmlFor="expense-name" className="self-end input-label ">
            Fare List
          </label>
          <div>
            <Button
              type="button"
              size={"sm"}
              className="h-8"
              onClick={() => append({ amount: 0 })}
            >
              {" "}
              <Plus size={15} /> <p className="">Add Fare Price</p>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {fields.map((field, index) => (
            <div className="flex flex-row justify-between gap-5" key={field.id}>
              <FormField {...register(`cost_list.${index}.amount`)} />
              {/* <input
                type="number"
                className="input- p-2 flex-1"
                placeholder="0"
                {...register(`cost_list.${index}.amount`)}
              /> */}

              <Button
                type="button"
                className="w-15 "
                onClick={() => remove(index)}
              >
                <Trash size={20} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TransportationSubForm;
