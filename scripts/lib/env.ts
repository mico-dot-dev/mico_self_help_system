import { config } from "dotenv";
config({ path: ".env.local" }); // Next's convention; harmless if absent
config(); // then .env

export function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

// Print where we're pointing so you never wonder "which DB was that?"
export function assertSafeTarget() {
  const host = new URL(requireEnv("DATABASE_URL")).host;
  console.log(`Target DB host: ${host}`);
  if (
    process.env.NODE_ENV === "production" &&
    !process.argv.includes("--yes")
  ) {
    throw new Error("Refusing to run in production without --yes");
  }
}
