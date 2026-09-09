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

// 1. Define your own local data structure instead of importing 'penguins'
interface PenguinRow {
  species: string;
  sex: string;
  bodyMass: number;
}

const localPenguins: PenguinRow[] = [
  { species: "Adelie", sex: "FEMALE", bodyMass: 3000 },
  { species: "Adelie", sex: "MALE", bodyMass: 4000 },
  { species: "Gentoo", sex: "FEMALE", bodyMass: 4500 },
  { species: "Gentoo", sex: "MALE", bodyMass: 5500 },
  // ... add more as needed
];

const sexDomain = ["FEMALE", "MALE"];
const sexColors = ["#2563eb", "#f97316"];

export const createExampleChart = (input: ChartOptions) =>
  defineChart(
    ({ width }) => {
      // 2. Use localPenguins instead of the missing import
      const observations = localPenguins.filter((row) => row.sex !== null);

      const rows = groupBy(observations, {
        by: { species: "species", sex: "sex" },
        outputs: { count: { reduce: "count" } },
      });

      return {
        marks: [
          barY(rows, {
            id: "penguin-count-bars",
            x: "species",
            y: "count",
            color: "sex",
            layout: group({
              scale: scaleBand<string>().domain(sexDomain).paddingInner(0.08),
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
            axis: { ticks: { count: 5 }, label: "Penguins" },
          },
        },
        color: {
          range: sexColors,
          legend: colorLegend({
            label: "Sex",
          }),
        },
      };
    },
    { keyboard: true, tooltip: exampleTooltip },
  );

export interface ChartOptions {
  revision: number;
}

export const exampleAriaLabel = "Penguins grouped by species";

export const chart = createExampleChart({
  revision: 0,
});

export default function Example() {
  return <Chart ariaLabel={exampleAriaLabel} definition={chart} height={480} />;
}
