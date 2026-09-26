import z from "zod";

export const CashFlowPointSchema = z.object({
  date: z.coerce.date(),
  transit: z.enum(["in", "out"]),
  total: z.coerce.number(),
});

const DateRangeSchema = z
  .object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  })
  .refine((r) => r.from < r.to, { message: "from must be before to" });

export type CashFlowPointModel = z.infer<typeof CashFlowPointSchema>;
export type DateRangeModel = z.infer<typeof DateRangeSchema>;
