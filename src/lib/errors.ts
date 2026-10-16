export function getErrorMessage(error: any): string {
  return error instanceof Error
    ? error.message
    : typeof error === "string"
      ? error
      : "Failed to fetch";
}

/** An error whose message is safe to show to the user (an expected failure). */
export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}
