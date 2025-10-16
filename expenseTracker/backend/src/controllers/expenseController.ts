import { Request, Response } from "express";
import { PrismaClient } from "../../dist/generated/prisma";
import { expenseSchema } from "../validation/expenseValidation";

const client = new PrismaClient();

interface AuthRequest extends Request {
  user?: { userId: number };
}

export const createExpense = async (req: AuthRequest, res: Response) => {
  // Validate request body using Zod schema
  const parseResult = expenseSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: parseResult.error.issues,
    });
  }

  const { title, description, amount, date, category } = parseResult.data;

  // Find user: Get the user ID from the authenticated request.
  const userId = req.user?.userId;
  console.log(userId);

  // Check authentication: Check if the user is authenticated, return 401 if not.
  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  // Create expense: Use Prisma to create a new expense with the extracted details and user ID.
  try {
    const newExpense = await client.expense.create({
      data: {
        title,
        description,
        amount,
        date: new Date(date),
        category,
        userId,
      },
    });

    // Return response: Return a 201 Created response with the new expense data.
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(404).json({
      error: "Something went wrong ",
    });
  }
};

export const getExpense = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.userId;

  if (!userId) {
    return res.status(403).json({
      error: "Unauthorized",
    });
  }

  try {
    // Fetch expenses for the authenticated user
    const expenses = await client.expense.findMany({
      where: {
        userId: userId,
      },
    });

    // Return the expenses data
    res.status(200).json(expenses);
  } catch (err) {
   
    console.error("Error fetching expenses:", err);
    res.status(500).json({
      error: "Failed to fetch expenses",
    });
  }
};
