import { prisma } from "@/src/lib/db/prisma-client";
import {
  DateRepeatType,
  ExpenseType,
  TransactionStatus,
  Prisma,
} from "@/src/generated/prisma";

type Tx = Prisma.TransactionClient;
const daysAgo = (n: number) => new Date(Date.now() - n * 86_400_000);

/** Delete everything a user owns in public.*, children before parents. */
export async function wipeUserData(userId: string, tx: Tx) {
  // Relation names (`expense`) are inferred; adjust to your schema.prisma.
  await tx.transaction.deleteMany({ where: { expense: { user_id: userId } } });
  await tx.task.deleteMany({ where: { user_id: userId } }); // before expense (task.expense_id)
  await tx.bill_expense.deleteMany({ where: { expense: { user_id: userId } } });
  await tx.transportation_expense.deleteMany({
    where: { expense: { user_id: userId } },
  });
  await tx.stock.deleteMany({ where: { expense: { user_id: userId } } });
  await tx.expense.deleteMany({ where: { user_id: userId } });
  await tx.task_category.deleteMany({
    where: { user_id: userId, is_system: false },
  });
  await tx.income.deleteMany({ where: { user_id: userId } });
}

export async function seedUserData(
  userId: string,
  { weeks = 8 }: { weeks?: number } = {},
) {
  await prisma.$transaction(async (tx) => {
    // stock.action.ts requires a system "Home" category; fail loudly if absent.
    const home = await tx.task_category.findFirst({
      where: { is_system: true, title: "Home" },
    });
    if (!home)
      throw new Error('System category "Home" is missing. Create it first.');

    const work = await tx.task_category.create({
      data: { title: "Work", user_id: userId },
    });

    // --- expenses (one per type, mirroring CreateExpense) ---
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
      data: { name: "Snacks", expense_type: ExpenseType.MISC, user_id: userId },
    });

    // --- tasks ---
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
          repeating_type: DateRepeatType.MANUAL,
          user_id: userId,
          priority_level: 1,
        },
        {
          title: "Review PRs",
          task_category_id: work.id,
          repeating_type: DateRepeatType.MANUAL,
          user_id: userId,
          due_date: daysAgo(-3),
        },
      ],
    });

    // --- spread across weeks so the bar/line charts have shape ---
    const expenses = [rent, tricycle, rice, snacks];
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
        const e = expenses[(w + i) % expenses.length];
        txRows.push({
          expense_id: e.id,
          amount: 1,
          price: 80 + ((w * 37 + i * 53) % 400),
          status: TransactionStatus.PENDING,
          created_at: daysAgo(w * 7 + i + 1),
        });
      }
    }
    await tx.income.createMany({ data: incomeRows });
    await tx.transaction.createMany({ data: txRows });
  });
}
