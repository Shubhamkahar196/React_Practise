import z from "zod";

export const expenseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  amount: z.number().positive("Amount must be positive"),
  date: z.string().refine((date) => {
    // Check if date is valid ISO string or valid date string
    return !isNaN(Date.parse(date));
  }, {
    message: "Invalid date format",
  }),
  category: z.string().min(1, "Category is required"),
});
