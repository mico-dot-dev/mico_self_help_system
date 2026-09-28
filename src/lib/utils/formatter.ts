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
