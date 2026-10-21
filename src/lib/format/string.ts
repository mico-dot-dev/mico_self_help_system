export function upperCaseFormat(word: string): string {
  return word
    .toLowerCase()
    .replace(/_/g, " ") // replaces underscores with spaces if your enum uses them
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
