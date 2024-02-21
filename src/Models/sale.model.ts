import { z } from "zod";

const invalid_type_error = "Invalid type provided for this feild";
const required_error = "This field cannot be blank";

export const Sale = z.object({
    item: z
    .string({invalid_type_error, required_error}).min(1, {message: required_error}),
    description: z
    .string().optional(),
    quantity: z
    .number({invalid_type_error, required_error}).min(1, {message: required_error}),
    unit_price: z
    .number({invalid_type_error, required_error}).min(1, required_error),
    total_price: z
    .number({invalid_type_error, required_error}).min(1, {message: required_error})
  })
