
import { Request, Response } from "express";
import { IUser } from "../models/user";
import { PrismaClient } from "@prisma/client";
import { IUserPaymentMethod } from "../models/payment_methods";


const prisma = new PrismaClient();

export const addUserPaymentMethod = async (req: Request, res: Response) => {
    try {
    const user = req.body.
    const userPaymentMethodData: IUserPaymentMethod = req.body

    const data = {
        user_id,


    }

    const userPM = new UserPaymentMethod(data)
    await prisma.user_payment_method.create()
    res.status(201).json({
        msg: "método de pago creado con éxito"
    })
}



  }