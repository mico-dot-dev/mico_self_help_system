"use client";

import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip as exampleTooltip } from "@tanstack/charts/tooltip";
import {
  barY,
  colorLegend,
  defineChart,
  group,
  groupBy,
} from "@tanstack/charts";
import { scaleBand, scaleLinear } from "d3-scale";
import { CashFlowPoint } from "@/src/type/chart";
import { ChartGranularity } from "@/src/type/chart";

const financeColors = ["#22c55e", "#ef4444"];

const createDateRange = (date: Date, granularity: ChartGranularity): string => {
  // CHANGED: Format monthly periods, e.g. "Jan", "Feb", "Mar".
  if (granularity === "month") {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(date);
  }

  // CHANGED: Format weekly periods, e.g. "Sep 7", "Sep 14".
  if (granularity === "week") {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  }

  // CHANGED: Format daily periods, e.g. "Mon", "Tue", "Wed".
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(date);
};

export const createBarChart = (
  data: CashFlowPoint[],
  granularity: ChartGranularity,
) =>
  defineChart(
    ({ width }) => {
      const rows = data.map((item) => {
        return {
          ...item,
          dateRange: createDateRange(item.dateStart, granularity),
        };
      });
      return {
        marks: [
          barY(rows, {
            id: "cash-flow-bars",
            x: "dateRange",
            y: "total",
            layout: group({
              scale: scaleBand<string>()
                .domain(["in", "out"])
                .paddingInner(0.08),
            }),
            color: "transit",
          }),
        ],

        scales: {
          x: {
            scale: () =>
              scaleBand<string>().paddingInner(0.14).paddingOuter(0.06),
            axis: { tickLabels: { rotate: width < 640 ? -32 : 0 } },
          },
          y: {
            scale: scaleLinear,
            grid: true,
            axis: { ticks: { count: 5 }, label: "Total" },
          },
        },

        color: {
          range: financeColors,
        },
      };
    },
    { keyboard: true, tooltip: exampleTooltip },
  );

interface CashFlowProps {
  data: CashFlowPoint[];
  granularity: ChartGranularity;
}

export default function BarGraph({ data, granularity }: CashFlowProps) {
  const chart = createBarChart(data, granularity);
  return (
    <Chart
      ariaLabel={"Data Chart"}
      definition={chart}
      width={680}
      height={240}
    />
  );
}
