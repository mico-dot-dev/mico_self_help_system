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

const financeColors = ["#2563eb", "#f97316"];

export const createBarChart = (data: CashFlowPoint[]) =>
  defineChart(
    ({ width }) => ({
      marks: [
        barY(data, {
          id: "cash-flow-bars",
          x: "dateRange",
          y: "total",
          layout: group({
            scale: scaleBand<string>().domain(["in", "out"]).paddingInner(0.08),
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
    }),
    { keyboard: true, tooltip: exampleTooltip },
  );

interface CashFlowProps {
  data: CashFlowPoint[];
}

export default function BarGraph({ data }: CashFlowProps) {
  const chart = createBarChart(data);
  return <Chart ariaLabel={"Data Chart"} definition={chart} height={250} />;
}
