"use client";
import { useMemo } from "react";
import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip as exampleTooltip } from "@tanstack/charts/tooltip";
import { barY, defineChart, group } from "@tanstack/charts";
import { scaleBand, scaleLinear } from "d3-scale";
import { CashFlowPointModel } from "@/src/schema/dashboard.schema";
import { ChartGranularity } from "@/src/type/chart";
import { createDateRange } from "@/lib/format/date";
import { useElementWidth } from "@/src/hooks/use-element-width";

const financeColors = ["#22c55e", "#ef4444"];
// Layout constants live in one place instead of being magic numbers.
const CHART_HEIGHT = 220;
const MIN_WIDTH = 280; // never render narrower than this; the container scrolls instead
const MOBILE_BREAKPOINT = 640;

export const createBarChart = (
  data: CashFlowPointModel[],
  granularity: ChartGranularity,
) =>
  defineChart(
    ({ width }) => {
      const isNarrow = width < MOBILE_BREAKPOINT;
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
              tickLabels: { rotate: isNarrow ? -32 : 0 },
            },
          },
          y: {
            scale: scaleLinear,
            grid: true,
            axis: { ticks: { count: isNarrow ? 3 : 5 } },
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
  // The wrapper is the single source of truth for available space.
  const { ref, width } = useElementWidth<HTMLDivElement>();
  const chart = useMemo(
    () => createBarChart(data, granularity),
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
