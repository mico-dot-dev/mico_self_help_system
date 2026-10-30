import "./lib/env"; // MUST be first: loads env before prisma-client
import { assertSafeTarget } from "./lib/env";
import { prisma } from "@/src/lib/db/prisma-client";
import { supabaseAdmin } from "./lib/supabase-admin";
import { seedUserData, wipeUserData } from "./seed-demo";

function assert(cond: unknown, msg: string): asserts cond {
  if (!cond) throw new Error(`ASSERTION FAILED: ${msg}`);
}

async function countRows(userId: string) {
  const [expense, task, income, tx] = await Promise.all([
    prisma.expense.count({ where: { user_id: userId } }),
    prisma.task.count({ where: { user_id: userId } }),
    prisma.income.count({ where: { user_id: userId } }),
    prisma.transaction.count({ where: { expense: { user_id: userId } } }),
  ]);
  return { expense, task, income, tx };
}

async function main() {
  assertSafeTarget();
  const email = `smoke+${Date.now()}@example.com`;
  let userId: string | undefined;

  try {
    // 1. create auth user (skips confirmation email and captcha)
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: "Smoke-test-123!",
      email_confirm: true,
    });
    if (error) throw error;
    userId = data.user.id;
    console.log("✔ created user", userId);

    // 2. populate
    await seedUserData(userId, { weeks: 2 });
    const counts = await countRows(userId);
    console.log("✔ populated", counts);
    assert(counts.expense === 4, "expected 4 expenses");
    assert(
      counts.income > 0 && counts.tx > 0,
      "expected income + transactions",
    );
  } finally {
    // 3. ALWAYS clean up, even if an assertion failed
    if (userId) {
      await prisma.$transaction((tx) => wipeUserData(userId!, tx));
      const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);
      if (error) console.error("✘ deleteUser failed:", error.message);

      // 4. verify nothing is left behind
      const left = await countRows(userId);
      assert(
        Object.values(left).every((n) => n === 0),
        `leftover rows: ${JSON.stringify(left)}`,
      );
      console.log("✔ cleaned up, 0 rows remain");
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
