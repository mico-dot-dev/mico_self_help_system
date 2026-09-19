// src/components/chart/CompletionAreaGraph.tsx
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
          fill: "url(#completion-gradient)",
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

        // 3. one dot per day (keep this last so it draws on top)
        dot(data, {
          id: "completion-dots",
          x: "day",
          y: "value",
          r: 4,
          fill: "#c084fc", // your --color-hover; lighter than the line, like your screenshot
        }),
      ],
      scales: {
        x: {
          scale: scalePoint, // "Mon".."Sun" as points, not bands
          axis: { line: false, ticks: { size: 0, padding: 10 } },
        },
        y: {
          scale: scaleLinear,
          grid: true,
          axis: {
            line: false,
            ticks: { count: 5, format: (v: number) => `${v}%` },
          },
        },
      },
      gradients: [
        {
          id: "completion-gradient",
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0, // bottom -> top
          stops: [
            { offset: 0.05, color: BRAND, opacity: 0.05 },
            { offset: 0.95, color: BRAND, opacity: 0.6 },
          ],
        },
      ],
      margin: { top: 10, right: 12, bottom: 30, left: 36 },
      theme: {
        foreground: "#6b7280",
        grid: "#1e1b4b",
        background: "transparent",
      },
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
      height={240}
    />
  );
}
