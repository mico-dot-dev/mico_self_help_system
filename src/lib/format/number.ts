export const formatToDecimal = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatToPercentage = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});
