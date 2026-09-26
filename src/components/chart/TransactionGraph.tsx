"use client";

import { areaY, d3Curve, defineChart, dot, lineY } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/react/tooltip";
import { tooltip } from "@tanstack/charts/tooltip";
import { scaleLinear, scalePoint } from "d3-scale";
import { curveMonotoneX } from "d3-shape";

export interface CompletionPoint {
  day: string; // "Mon" ... "Sun"
  value: number; // 0-100
}

const BRAND = "#a855f7"; // ideally read from your --color-primary token
const curve = d3Curve(curveMonotoneX);

const createCompletionChart = (data: CompletionPoint[]) =>
  defineChart(
    {
      marks: [
        // 1. gradient fill only, no stroke
        areaY(data, {
          id: "completion-area",
          x: "day",
          y: "value",
          curve,
          fill: "var(--primary-light)",
        }),

        // 2. the line on top edge
        lineY(data, {
          id: "completion-line",
          x: "day",
          y: "value",
          curve,
          stroke: BRAND,
          strokeWidth: 2,
        }),
      ],

      guides: false,

      scales: {
        x: {
          scale: scalePoint, // "Mon".."Sun" as points, not bands
        },
        y: {
          scale: scaleLinear,
        },
      },

      margin: 0,
    },
    { focus: "group-x", tooltip: { use: tooltip } },
  );

export default function CompletionAreaGraph({
  data,
}: {
  data: CompletionPoint[];
}) {
  return (
    <Chart
      ariaLabel="Task completion rate"
      definition={createCompletionChart(data)}
      height={50}
      width={150}
    />
  );
}
