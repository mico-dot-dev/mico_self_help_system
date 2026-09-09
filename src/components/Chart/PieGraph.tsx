"use client";

import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip as exampleTooltip } from "@tanstack/charts/tooltip";

import { defineChart } from "@tanstack/charts";
import { pie, polar, radialArc } from "@tanstack/charts/polar";

interface AlphabetRow {
  letter: string;
  frequency: number;
}

const alphabet: readonly AlphabetRow[] = [
  { letter: "E", frequency: 0.12702 },
  { letter: "T", frequency: 0.09056 },
  { letter: "A", frequency: 0.08167 },
];

const sliceSize = 5;

export function selectDonutData(rows: readonly AlphabetRow[], revision = 0) {
  const start = Math.abs(revision % 2) * sliceSize;
  return rows.slice(start, start + sliceSize);
}

const colors = ["#0ea5e9", "#6366f1", "#a855f7", "#ec4899", "#f97316"];
const percentage = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const createExampleChart = (input: ChartOptions) => {
  const arcs = pie(selectDonutData(alphabet, input.revision), {
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
              id: "letter-slices",
              key: "letter",
              innerRadius: ({ radius }) => radius * 0.58,
              color: "letter",
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
            `${datum.letter} · ${percentage.format(datum.frequency)}`,
        },
      },
    },
  );
};
export interface ChartOptions {
  revision: number;
}

export const exampleAriaLabel = "English letter frequency donut";

export const chart = createExampleChart({
  revision: 0,
});

export default function BarGraph() {
  return <Chart ariaLabel={exampleAriaLabel} definition={chart} height={200} />;
}
