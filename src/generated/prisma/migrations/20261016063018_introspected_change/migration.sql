-- CreateEnum
CREATE TYPE "DateRepeatType" AS ENUM ('YEARLY', 'MONTHLY', 'DAILY', 'MANUAL', 'BIWEEKLY', 'WEEKLY');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PAID', 'CANCELLED', 'PENDING');

-- CreateEnum
CREATE TYPE "ExpenseType" AS ENUM ('HOUSE', 'PERSONAL', 'TRANSPORTATION', 'GROCERY', 'MISC');

-- CreateTable
CREATE TABLE "task" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT DEFAULT '',
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completed_at" DATE,
    "title" TEXT NOT NULL,
    "priority_level" SMALLINT NOT NULL DEFAULT 0,
    "due_date" TIMESTAMPTZ(6),
    "task_category_id" UUID NOT NULL,
    "repeating_type" "DateRepeatType",
    "expense_id" UUID,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_category" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL DEFAULT '',
    "user_id" UUID,
    "is_system" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "task_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill_expense" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expense_id" UUID NOT NULL,
    "repeating_type" "DateRepeatType",
    "running_bill" REAL,

    CONSTRAINT "bill_expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "expense_type" "ExpenseType" NOT NULL DEFAULT 'MISC',
    "user_id" UUID NOT NULL,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "curr_amount" SMALLINT NOT NULL DEFAULT 0,
    "min_amount" SMALLINT NOT NULL DEFAULT 0,
    "expense_id" UUID NOT NULL,

    CONSTRAINT "stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expense_id" UUID NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING',
    "repeat_at" TIMESTAMPTZ(6),
    "date_transact" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transportation_expense" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expense_id" UUID NOT NULL,
    "cost_list" SMALLINT[],

    CONSTRAINT "transportation_expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "income" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL NOT NULL,
    "user_id" UUID NOT NULL,
    "from_job" BOOLEAN NOT NULL DEFAULT false,
    "date_obtained" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),

    CONSTRAINT "income_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID,

    CONSTRAINT "budget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "task_category_user_id_title_key" ON "task_category"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "bill_expense_expense_id_key" ON "bill_expense"("expense_id");

-- CreateIndex
CREATE UNIQUE INDEX "stock_expense_id_key" ON "stock"("expense_id");

-- CreateIndex
CREATE UNIQUE INDEX "transportation_expense_expense_id_key" ON "transportation_expense"("expense_id");

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_task_category_id_fkey" FOREIGN KEY ("task_category_id") REFERENCES "task_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bill_expense" ADD CONSTRAINT "bill_expense_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportation_expense" ADD CONSTRAINT "transportation_expense_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;
