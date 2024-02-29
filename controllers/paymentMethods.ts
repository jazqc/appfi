
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IUserPaymentMethod } from "../models/payment_methods";
import { IUser } from "../models/user";

const prisma = new PrismaClient();

export const addUserPaymentMethod = async (req: Request, res: Response) => {
    try {
      const userId: number = req.body.userConfirmed.user_id;
        console.log(userId)

        const userPaymentMethodData: IUserPaymentMethod = req.body;
        const {
            
            type_id,
            name,
            description,
            set_alarm
        } = userPaymentMethodData;

        const data = {
            user_id: userId,
            type_id,
            name,
            description,
            set_alarm,
        };

        const userPM = await prisma.user_payment_method.create({
            data: data,
        });

        res.status(201).json({
            msg: "método de pago creado con éxito",
            userPM,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear método de pago" });
    }
};
