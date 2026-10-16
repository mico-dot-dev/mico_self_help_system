/*
  Warnings:

  - A unique constraint covering the columns `[expense_id]` on the table `task` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "one_active_task_per_expense" ON "task"("expense_id") WHERE ((completed = false) AND (is_archived = false) AND (expense_id IS NOT NULL));
