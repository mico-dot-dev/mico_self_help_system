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
import { financeRow } from "@/src/type/chart";
import { ChartOptions } from "./PieGraph";

const financeDomain = ["in", "out"];
const financeColors = ["#2563eb", "#f97316"]; // Blue for 'in', Orange for 'out'

export const createBarChart = (input: ChartOptions, data: financeRow[]) =>
  defineChart(
    ({ width }) => {
      // const groupType = data
      //   .slice(0, data.length - input.revision * 12)
      //   .filter((row): row is financeRow => row.financeType !== null);

      const groupType = data.filter((row) => row.financeType !== null);

      const rows = groupBy(groupType, {
        by: { financeType: "financeType", dateRange: "dateRange" },
        outputs: { totalSum: { reduce: "sum", value: "total" } },
      });

      return {
        marks: [
          barY(rows, {
            id: "date=range-bars",
            x: "dateRange",
            y: "totalSum",
            color: "financeType",
            layout: group({
              scale: scaleBand<string>()
                .domain(financeDomain)
                .paddingInner(0.08),
            }),
            inset: 1,
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
          legend: colorLegend({
            label: "finance",
          }),
        },
      };
    },
    { keyboard: true, tooltip: exampleTooltip },
  );

export const exampleAriaLabel = "Grouping of Income";
const example: financeRow[] = [
  { dateRange: "week 1", financeType: "in", total: 100 },
  { dateRange: "week 1", financeType: "out", total: 50 },
  { dateRange: "week 2", financeType: "in", total: 100 },
  { dateRange: "week 3", financeType: "in", total: 100 },
  { dateRange: "week 4", financeType: "in", total: 100 },
];

export const chart = createBarChart({ revision: 0 }, example);

export default function BarGraph() {
  return <Chart ariaLabel={exampleAriaLabel} definition={chart} height={250} />;
}
