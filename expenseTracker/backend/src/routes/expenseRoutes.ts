import { Router } from "express";
import { createExpense, getExpense } from "../controllers/expenseController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

//  router.use(authMiddleware)
router.post("/create", authMiddleware, createExpense);

router.get("/:id", authMiddleware, getExpense);

export default router
