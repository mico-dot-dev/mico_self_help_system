// src/components/ui/FormField.tsx
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "../ui/input-group";
import { LucideIcon } from "lucide-react";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  Icon?: LucideIcon;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, id, className, placeholder, type, Icon, ...rest }, ref) => {
    const inputId = id ?? rest.name;
    return (
      <Field className="form-field-container w-full">
        {label && (
          <FieldLabel htmlFor={inputId} className="">
            {label}
          </FieldLabel>
        )}
        <InputGroup className="border border-border py-5">
          <InputGroupInput
            type={type}
            id={inputId}
            ref={ref}
            placeholder={placeholder && `${placeholder}`}
            className=""
            {...rest}
          />
          <InputGroupAddon>{Icon && <Icon />}</InputGroupAddon>
        </InputGroup>
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-error">
            {error}
          </p>
        )}
      </Field>
    );
  },
);
FormField.displayName = "FormField";
