import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { formatToPesoCompact } from "@/src/lib/format/currency";

function BudgetProgressBar() {
  const budget = 15000;
  const remaining = 8000;
  const percentage = 80;
  const barWidth = Math.min(percentage, 100);

  const isOverBudget = percentage >= 100 && budget > 0;
  const isNearLimit = percentage >= 80 && !isOverBudget;
  const progressColor = isOverBudget
    ? "var(--destructive)"
    : isNearLimit
      ? "var(--chart-5)"
      : "var(--chart-2)";
  const StatusIcon = isOverBudget ? AlertTriangle : CheckCircle2;

  return (
    <div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "var(--muted)" }}
        role="progressbar"
        aria-label="Budget used"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.min(percentage, 100)}
        aria-valuetext={`${percentage.toFixed(1)}% of budget used`}
      >
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-out"
          style={{
            width: `${barWidth}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>
    </div>
  );
}

export default BudgetProgressBar;
