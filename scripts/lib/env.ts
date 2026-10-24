"use server";

import dotenv from "dotenv";
import path from "path";
import { prisma } from "@/lib/db/prisma-client";

// Explicitly tell dotenv to look for .env.local in the root directory
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

async function main() {
  const count = await prisma.expense.count();
  console.log("Expenses in DB:", count);
}

main().finally(() => prisma.$disconnect());
