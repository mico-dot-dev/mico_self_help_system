"use client";

import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip as exampleTooltip } from "@tanstack/charts/tooltip";

import { defineChart } from "@tanstack/charts";
import { pie, polar, radialArc } from "@tanstack/charts/polar";
import { Circle } from "lucide-react";

import { financeFrequency } from "@/src/type/chart";
import { financeExample } from "@/src/actions/dashboard.action";

const sliceSize = 5;

export function selectDonutData(
  rows: readonly financeFrequency[],
  revision = 0,
) {
  const start = Math.abs(revision % 2) * sliceSize;
  return rows.slice(start, start + sliceSize);
}

const colors = ["#0ea5e9", "#6366f1", "#a855f7", "#ec4899", "#f97316"];
const percentage = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const createExampleChart = (input: ChartOptions) => {
  const arcs = pie(selectDonutData(financeExample, input.revision), {
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
      color: { range: colors },
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

export const exampleAriaLabel = "";

export const chart = createExampleChart({
  revision: 0,
});

export default function BarGraph() {
  return (
    <div className="flex flex-row">
      <Chart
        ariaLabel={exampleAriaLabel}
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
