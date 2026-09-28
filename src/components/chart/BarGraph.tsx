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
import { CashFlowPointModel } from "@/src/schema/dashboard.schema";
import { ChartGranularity } from "@/src/type/chart";
import { createDateRange } from "@/src/lib/utils/date-formatter";

const financeColors = ["#22c55e", "#ef4444"];

export const createBarChart = (
  data: CashFlowPointModel[],
  granularity: ChartGranularity,
) =>
  defineChart(
    ({ width }) => {
      const rows = data.map((item) => {
        return {
          ...item,
          dateRange: createDateRange(item.date, granularity),
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
            axis: {
              tickLabels: { rotate: width < 640 ? -32 : 0 },
            },
          },
          y: {
            scale: scaleLinear,
            grid: true,
            axis: { ticks: { count: 3 } },
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
  data: CashFlowPointModel[];
  granularity: ChartGranularity;
}

export default function BarGraph({ data, granularity }: CashFlowProps) {
  const chart = createBarChart(data, granularity);
  return (
    <>
      <Chart
        ariaLabel={"Data Chart"}
        definition={chart}
        width={680}
        height={220}
      />
    </>
  );
}
