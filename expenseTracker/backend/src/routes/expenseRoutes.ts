import { Router } from "express";
import { createExpense } from "../controllers/expenseController";

const router = Router();


router.post("/create",createExpense);

export default router