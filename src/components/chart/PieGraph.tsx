"use client";
import { useMemo } from "react";
import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip as exampleTooltip } from "@tanstack/charts/tooltip";
import { defineChart } from "@tanstack/charts";
import { pie, polar, radialArc, radialText } from "@tanstack/charts/polar";
import { scaleOrdinal } from "@tanstack/charts/scales/ordinal";
import { Circle, PhilippinePeso } from "lucide-react";
import { ExpenseFrequency } from "@/src/type/chart";
import { ExpenseType } from "@/src/generated/prisma";
import { upperCaseFormat } from "@/src/lib/utils/formatter";
import {
  formatToPercentage,
  formatToPesoCompact,
  formatToDecimal,
} from "@/src/lib/utils/formatter";

const expenseColorScale = scaleOrdinal(Object.values(ExpenseType), [
  "var(--chart-bills)",
  "var(--chart-food)",
  "var(--chart-transport)",
  "var(--chart-shopping)",
  "var(--chart-other)",
]);

export const createPieChart = (data: ExpenseFrequency[], total: number) => {
  const arcs = pie(data, {
    value: "amount",
  });

  return defineChart(
    {
      marks: [
        polar({
          inset: 0,
          radiusRatio: 0.8,
          marks: [
            radialArc(arcs, {
              id: "type-slices",
              key: "type",
              innerRadius: ({ radius }) => radius * 0.58,
              color: "type",
            }),
          ],
          scales: {
            angle: null,
            radius: null,
          },
        }),
      ],
      scales: {
        x: null,
        y: null,
      },
      color: { scale: expenseColorScale },
      margin: 0,
    },
    {
      keyboard: true,
      tooltip: {
        use: exampleTooltip,
        ...{
          format: ({ datum }) =>
            `${upperCaseFormat(datum.type)} · ${formatToPercentage.format(datum.amount / total)}`,
        },
      },
    },
  );
};
export interface ChartOptions {
  revision: number;
}

interface PieGraphProps {
  data: ExpenseFrequency[];
}

export default function PieGraph({ data }: PieGraphProps) {
  const total = useMemo(
    () => data.reduce((sum, d) => sum + d.amount, 0),
    [data],
  );
  const chart = useMemo(() => createPieChart(data, total), [data, total]);
  if (data.length === 0 || total === 0) {
    return <p className="text-sm text-text-muted">No expense data yet</p>;
  }

  return (
    <div className="flex flex-row">
      <div className="relative shrink-0">
        <Chart
          ariaLabel={"exampleAriaLabel"}
          definition={chart}
          height={200}
          width={200}
          className=""
        />

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-text-muted">Total</span>
          <span className="text-xl font-bold text-text-primary">
            {formatToPesoCompact.format(total)}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className=" flex-1">
        <ul className=" flex flex-col w-full">
          {data.map((d, i) => {
            return (
              <li
                className="flex flex-row justify-between not-last:border-b border-border py-2 text-sm"
                key={i}
              >
                <div className="flex flex-row gap-1.5">
                  <Circle
                    size={10}
                    className="self-center"
                    fill={expenseColorScale(d.type)}
                    color={expenseColorScale(d.type)}
                  />
                  <p className="">{upperCaseFormat(d.type)}</p>
                </div>
                <div className="flex flex-row font-semibold gap-1">
                  <PhilippinePeso
                    size={12}
                    className="self-center"
                    strokeWidth={3}
                  />
                  <span>{formatToDecimal.format(d.amount)}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
