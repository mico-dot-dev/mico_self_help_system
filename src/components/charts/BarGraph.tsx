"use client";
import { useMemo } from "react";
import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip as exampleTooltip } from "@tanstack/charts/tooltip";
import { areaY, d3Curve, defineChart, lineY } from "@tanstack/charts";
import { scaleLinear, scaleTime } from "d3-scale";
import { curveMonotoneX } from "d3-shape";
import { format } from "date-fns";
import { CashFlowPointModel } from "@/src/schema/dashboard.schema";
import { ChartGranularity } from "@/src/type/chart";
import { useElementWidth } from "@/src/hooks/use-element-width";

const INCOME = "#20d6a2"; // teal, same as --chart-2 (dark)
const EXPENSE = "#f0528a"; // pink, same as --chart-3 (dark)

const CHART_HEIGHT = 220;
const MIN_WIDTH = 280;
const MOBILE_BREAKPOINT = 640;

const curve = d3Curve(curveMonotoneX);

const pesoFormat = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

const xFormat = (granularity: ChartGranularity) => (d: Date) =>
  granularity === "month" ? format(d, "MMM") : format(d, "MMM d");

export const createCashFlowChart = (
  data: CashFlowPointModel[],
  granularity: ChartGranularity,
) => {
  const byDate = (a: CashFlowPointModel, b: CashFlowPointModel) =>
    a.date.getTime() - b.date.getTime();

  const income = data.filter((d) => d.transit === "in").sort(byDate);
  const expense = data.filter((d) => d.transit === "out").sort(byDate);
  console.log(income.length, expense.length, data.slice(0, 3));

  return defineChart(
    ({ width }) => {
      const isNarrow = width < MOBILE_BREAKPOINT;

      return {
        marks: [
          // Areas first so the lines draw on top
          areaY(income, {
            id: "income-area",
            x: "date",
            y: "total",
            curve,
            fill: "url(#income-gradient)",
          }),
          areaY(expense, {
            id: "expense-area",
            x: "date",
            y: "total",
            curve,
            fill: "url(#expense-gradient)",
          }),
          lineY(income, {
            id: "income-line",
            x: "date",
            y: "total",
            curve,
            stroke: INCOME,
            strokeWidth: 2,
          }),
          lineY(expense, {
            id: "expense-line",
            x: "date",
            y: "total",
            curve,
            stroke: EXPENSE,
            strokeWidth: 2,
          }),
        ],

        scales: {
          x: {
            scale: scaleTime,
            grid: false,
            axis: {
              line: false,
              ticks: {
                count: isNarrow ? 4 : 6,
                size: 0,
                padding: 10,
                format: xFormat(granularity),
              },
            },
          },
          y: {
            scale: scaleLinear,
            grid: true,
            axis: {
              line: false,
              ticks: {
                count: isNarrow ? 3 : 5,
                format: (v: number) => pesoFormat.format(v),
              },
            },
          },
        },

        gradients: [
          {
            id: "income-gradient",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0, // bottom -> top, same as TaskCompletionRate
            stops: [
              { offset: 0.05, color: INCOME, opacity: 0.05 },
              { offset: 0.95, color: INCOME, opacity: 0.45 },
            ],
          },
          {
            id: "expense-gradient",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
            stops: [
              { offset: 0.05, color: EXPENSE, opacity: 0.05 },
              { offset: 0.95, color: EXPENSE, opacity: 0.4 },
            ],
          },
        ],

        margin: {
          top: 10,
          right: 12,
          bottom: 30,
          left: isNarrow ? 44 : 56, // room for "₱6,000"
        },
        theme: {
          foreground: "#6b7280",
          grid: "rgba(255, 255, 255, 0.08)",
          background: "transparent",
        },
      };
    },
    { focus: "group-x", tooltip: exampleTooltip },
  );
};

interface CashFlowProps {
  data: CashFlowPointModel[];
  granularity: ChartGranularity;
}

export default function BarGraph({ data, granularity }: CashFlowProps) {
  const { ref, width } = useElementWidth<HTMLDivElement>();
  const chart = useMemo(
    () => createCashFlowChart(data, granularity),
    [data, granularity],
  );

  return (
    <div ref={ref} className="w-full min-w-0 overflow-x-auto">
      <Chart
        ariaLabel="Cash flow: money in versus money out"
        definition={chart}
        width={Math.max(width, MIN_WIDTH)}
        height={CHART_HEIGHT}
      />
    </div>
  );
}
