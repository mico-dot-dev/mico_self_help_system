import { prisma } from "@/lib/db/prisma";
import {
  DateRepeatType,
  ExpenseType,
  TransactionStatus,
  Prisma,
} from "@/src/generated/prisma";

type Tx = Prisma.TransactionClient;
const daysAgo = (n: number) => new Date(Date.now() - n * 86_400_000);

/** Delete everything a user owns in public.* */
export async function wipeUserData(userId: string, tx: Tx) {
  // 1. tasks first: task_category FK is NO ACTION, so categories can't go while tasks reference them
  await tx.task.deleteMany({ where: { user_id: userId } });
  // 2. expenses: cascades bill_expense, stock, transportation_expense, transaction
  await tx.expense.deleteMany({ where: { user_id: userId } });
  // 3. personal categories only; never touch is_system rows (shared by all users)
  await tx.task_category.deleteMany({
    where: { user_id: userId, is_system: false },
  });
  // 4. tables with no relation, so they never cascade
  await tx.income.deleteMany({ where: { user_id: userId } });
  await tx.budget.deleteMany({ where: { user_id: userId } });
}

export async function seedUserData(
  userId: string,
  { weeks = 8 }: { weeks?: number } = {},
) {
  await prisma.$transaction(
    async (tx) => {
      // stock.action.ts depends on this system category existing
      const home = await tx.task_category.findFirst({
        where: { is_system: true, title: "Home" },
      });
      if (!home)
        throw new Error('System category "Home" is missing. Create it first.');

      const work = await tx.task_category.create({
        data: { title: "Work", user_id: userId },
      });

      // One expense per type, mirroring CreateExpense
      const rent = await tx.expense.create({
        data: {
          name: "Rent",
          description: "Monthly rent",
          expense_type: ExpenseType.HOUSE,
          user_id: userId,
          bill_expense: {
            create: {
              repeating_type: DateRepeatType.MONTHLY,
              running_bill: 6500,
            },
          },
        },
      });
      const tricycle = await tx.expense.create({
        data: {
          name: "Tricycle",
          expense_type: ExpenseType.TRANSPORTATION,
          user_id: userId,
          transportation_expense: { create: { cost_list: [20, 30, 50] } },
        },
      });
      const rice = await tx.expense.create({
        data: {
          name: "Rice",
          expense_type: ExpenseType.GROCERY,
          user_id: userId,
          stock: { create: { min_amount: 3, curr_amount: 1 } }, // below min on purpose
        },
      });
      const snacks = await tx.expense.create({
        data: {
          name: "Snacks",
          expense_type: ExpenseType.MISC,
          user_id: userId,
        },
      });

      await tx.task.createMany({
        data: [
          {
            title: "Buy Rice",
            task_category_id: home.id,
            expense_id: rice.id,
            repeating_type: DateRepeatType.MANUAL,
            user_id: userId,
          },
          {
            title: "Finish report",
            task_category_id: work.id,
            completed: true,
            priority_level: 1,
            repeating_type: DateRepeatType.MANUAL,
            user_id: userId,
          },
          {
            title: "Review PRs",
            task_category_id: work.id,
            due_date: daysAgo(-3),
            repeating_type: DateRepeatType.MANUAL,
            user_id: userId,
          },
        ],
      });

      // Spread across weeks so the charts have shape
      const expenses = [rent, tricycle, rice, snacks];
      const statuses = [
        TransactionStatus.PAID,
        TransactionStatus.PAID,
        TransactionStatus.PENDING,
        TransactionStatus.CANCELLED, // exercises the CANCELLED filter
      ];
      const incomeRows: Prisma.incomeCreateManyInput[] = [];
      const txRows: Prisma.transactionCreateManyInput[] = [];

      for (let w = 0; w < weeks; w++) {
        incomeRows.push({
          user_id: userId,
          amount: 12000 + w * 150,
          from_job: w % 2 === 0,
          date_obtained: daysAgo(w * 7 + 1),
        });
        for (let i = 0; i < 3; i++) {
          const when = daysAgo(w * 7 + i + 1);
          txRows.push({
            expense_id: expenses[(w + i) % expenses.length].id,
            amount: 1,
            price: 80 + ((w * 37 + i * 53) % 400),
            status: statuses[(w + i) % statuses.length],
            created_at: when,
            date_transact: when,
          });
        }
      }
      // One upcoming repeating bill, like CreateExpense creates
      txRows.push({
        expense_id: rent.id,
        amount: 0,
        price: 6500,
        status: TransactionStatus.PENDING,
        repeat_at: daysAgo(-30),
      });

      await tx.income.createMany({ data: incomeRows });
      await tx.transaction.createMany({ data: txRows });
    },
    { timeout: 20_000 }, // interactive transactions default to 5s
  );
}
