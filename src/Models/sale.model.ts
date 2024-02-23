import { z } from "zod";

export const schema = z.object({
  item: z
  .string().min(1).max(30),
  description: z
  .string().optional(),
  quantity: z
  .number().min(1),
  unit_price: z
  .number().min(1),
  total_price: z
  .number().min(1)
});
export type FormData = z.infer<typeof schema>
