"use client";

import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip as exampleTooltip } from "@tanstack/charts/tooltip";
import { defineChart } from "@tanstack/charts";
import { pie, polar, radialArc } from "@tanstack/charts/polar";
import { scaleOrdinal } from "@tanstack/charts/scales/ordinal";
import { Circle } from "lucide-react";
import { ExpenseFrequency } from "@/src/type/chart";

const sliceSize = 5;

export function selectDonutData(rows: ExpenseFrequency[], revision = 0) {
  const start = Math.abs(revision % 2) * sliceSize;
  return rows.slice(start, start + sliceSize);
}
const expenseColorScale = scaleOrdinal(
  ["Bills", "Food", "Transportation", "Shopping", "Other"],
  [
    "var(--chart-bills)",
    "var(--chart-food)",
    "var(--chart-transport)",
    "var(--chart-shopping)",
    "var(--chart-other)",
  ],
);
const percentage = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const createPieChart = (data: ExpenseFrequency[]) => {
  const arcs = pie(selectDonutData(data), {
    value: "frequency",
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
            `${datum.type} · ${percentage.format(datum.frequency)}`,
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
  const chart = createPieChart(data);
  return (
    <div className="flex flex-row">
      <Chart
        ariaLabel={"exampleAriaLabel"}
        definition={chart}
        height={200}
        width={200}
        className=""
      />
      <div className=" flex-1">
        <ul className=" flex flex-col w-full">
          <li className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <Circle size={15} className="self-center" />
              <p className="">Bills</p>
            </div>
            <p>$1,794.60</p>
          </li>
          <li className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <Circle size={15} className="self-center" />
              <p className="">Bills</p>
            </div>
            <p>$1,794.60</p>
          </li>
          <li className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <Circle size={15} className="self-center" />
              <p className="">Bills</p>
            </div>
            <p>$1,794.60</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
