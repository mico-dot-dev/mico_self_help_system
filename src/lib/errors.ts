export function getErrorMessage(error: any): string {
  return error instanceof Error
    ? error.message
    : typeof error === "string"
      ? error
      : "Failed to fetch user tasks";
}
