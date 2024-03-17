import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { parseDate } from "../helpers/dateParser";

const prisma = new PrismaClient();

export const addTransaction =async (req: Request, res: Response) => {
    try {
        const userId: number = req.body.userConfirmed.user_id;
        const transactionData: ITransaction = req.body
        const {transaction_type_id, amount, name, description, category_id, date, is_recurring, recurrency_id, user_payment_method_id, expiration_id, installments, installments_payments} = transactionData
        
        // function parseDate(dateString: any) {
        //     const parsedDate = new Date(dateString);
        //     if (isNaN(parsedDate.getTime())) {
        //        return null;
        //     }
        //     return parsedDate;
        //    }
           const parsedTransactionDate = parseDate(date);
           if (!parsedTransactionDate) {
            return res.status(400).json({ error: "Formato de fecha invalido" });
          }
          const transaction = {
            transaction_type_id,
            amount,
            name,
            description,
            category_id,
            date: parsedTransactionDate,
            is_recurring,
            recurrency_id,
            user_payment_method_id,
            expiration_id,
            installments,
            installments_payments,
          };
    
    const newTransaction = await prisma.transaction.create({
       data: transaction 
    })
    return res.status(201).json({ message: "Transaction creada con éxito", newTransaction });
  } catch (error) {
     console.error(error);
     return res.status(500).json({ error: "Error al crear Transaction" });
  }
};


