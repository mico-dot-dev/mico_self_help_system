"use client";

import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip as exampleTooltip } from "@tanstack/charts/tooltip";
import { defineChart } from "@tanstack/charts";
import { pie, polar, radialArc } from "@tanstack/charts/polar";
import { scaleOrdinal } from "@tanstack/charts/scales/ordinal";
import { Circle, PhilippinePeso } from "lucide-react";
import { ExpenseFrequency } from "@/src/type/chart";
import { ExpenseType } from "@/src/generated/prisma";
import { upperCaseFormat } from "@/src/lib/utils/formatter";

const sliceSize = 5;

export function selectDonutData(rows: ExpenseFrequency[], revision = 0) {
  const start = Math.abs(revision % 2) * sliceSize;
  return rows.slice(start, start + sliceSize);
}
const expenseColorScale = scaleOrdinal(
  [...ExpenseType.toString()],
  [
    "var(--chart-bills)",
    "var(--chart-food)",
    "var(--chart-transport)",
    "var(--chart-shopping)",
    "var(--chart-other)",
  ],
);

const c = expenseColorScale;

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
          {data.map((d, i) => {
            return (
              <li className="flex flex-row justify-between" key={i}>
                <div className="flex flex-row gap-1">
                  <Circle
                    size={12}
                    className="self-center"
                    fill={expenseColorScale(d.type)}
                    color={expenseColorScale(d.type)}
                  />
                  <p className="">{upperCaseFormat(d.type)}</p>
                </div>
                <div className="flex flex-row">
                  <PhilippinePeso size={12} className="self-center" />
                  <span>{d.frequency}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
