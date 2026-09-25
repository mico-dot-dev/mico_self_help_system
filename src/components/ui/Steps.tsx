// src/components/ui/Stepper.tsx
import { twJoin } from "tailwind-merge";
import { Check } from "lucide-react";

interface StepperProps {
  steps: string[];
  currentStep: number; // 1-indexed, matches your TransactionForm pattern
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-start w-full">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div
            key={label}
            className={twJoin(
              "flex flex-row items-center",
              !isLast && "flex-1",
            )}
          >
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div
                className={twJoin(
                  "flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-semibold transition-all duration-300",
                  isActive && "bg-primary border-primary text-white ",
                  isCompleted && "bg-primary border-primary text-white",
                  !isActive &&
                    !isCompleted &&
                    "bg-transparent border-border text-text-muted",
                )}
              >
                {isCompleted ? <Check size={18} /> : stepNumber}
              </div>
              <span
                className={twJoin(
                  "text-xs whitespace-nowrap",
                  isActive || isCompleted
                    ? "text-text-primary font-medium"
                    : "text-text-muted",
                )}
              >
                {label}
              </span>
            </div>

            {!isLast && (
              <div className="flex flex-1 h-0.5 mb-5 rounded-full overflow-hidden bg-border">
                <div
                  className={twJoin(
                    "h-full bg-primary transition-all duration-500",
                    isCompleted ? "w-full" : "w-0",
                  )}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
