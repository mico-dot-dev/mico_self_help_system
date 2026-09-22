// src/components/ui/FormField.tsx
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, id, className, placeholder, type, ...rest }, ref) => {
    const inputId = id ?? rest.name; // falls back to the RHF field name

    return (
      <fieldset className="form-field-container">
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
        <input
          type={type}
          id={inputId}
          ref={ref}
          placeholder={placeholder ? `E.G., ${placeholder}` : undefined}
          className={twMerge(
            "input-base p-2",
            error && "border-error focus:border-error",
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-error">
            {error}
          </p>
        )}
      </fieldset>
    );
  },
);
FormField.displayName = "FormField";
