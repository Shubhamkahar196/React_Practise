import { Request,Response } from "express";
import { PrismaClient } from "../../dist/generated/prisma";

const client = new PrismaClient();

interface AuthRequest extends Request{
    user?: {id: number};
}

export const createExpense = async(req:AuthRequest, res:Response)=>{
//    Extract details: Extract description, amount, date, and category from the request body.

    const { title,description,amount,date ,category} = req.body;

    // Find user: Get the user ID from the authenticated request.
    
    const userId = req.user?.id;

    // Check authentication: Check if the user is authenticated, return 401 if not.
    if(!userId){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

// Create expense: Use Prisma to create a new expense with the extracted details and user ID.
try{
    const newExpense = await client.expense.create({
        data:{
            title,
            description,
            amount : parseFloat(amount),
            date: new Date(date),
            category,
            userId,
        }
    })
 
    //  Return response: Return a 201 Created response with the new expense data.
   res.status(201).json(newExpense);
}catch(error){
    res.status(404).json({
        error: "Something went wrong "
    })
}



}