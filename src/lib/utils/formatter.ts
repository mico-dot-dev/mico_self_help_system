import { intlFormat } from "date-fns";

export function upperCaseFormat(word: string): string {
  return word
    .toLowerCase()
    .replace(/_/g, " ") // replaces underscores with spaces if your enum uses them
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const formatFloat = (amount: number) => {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatToDecimal = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatToPercentage = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const formatToPesoCompact = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  notation: "compact",
  maximumFractionDigits: 1,
});
