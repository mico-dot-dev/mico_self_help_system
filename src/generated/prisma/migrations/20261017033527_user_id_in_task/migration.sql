-- 1. add the column as NULLABLE so existing rows are allowed
ALTER TABLE "task" ADD COLUMN "user_id" UUID;

-- 2. backfill: the expense owner first, then the category owner
UPDATE "task" t SET "user_id" = e."user_id"
FROM "expense" e WHERE t."expense_id" = e."id";

UPDATE "task" t SET "user_id" = c."user_id"
FROM "task_category" c
WHERE t."task_category_id" = c."id" AND t."user_id" IS NULL AND c."user_id" IS NOT NULL;

-- 3. only now make it required
ALTER TABLE "task" ALTER COLUMN "user_id" SET NOT NULL;

-- 4. index for "all tasks of this user"
CREATE INDEX "task_user_id_idx" ON "task"("user_id");