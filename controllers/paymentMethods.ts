
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IExpiration, IUserPaymentMethod } from "../models/payment_methods";

const prisma = new PrismaClient();

export const addUserPaymentMethod = async (req: Request, res: Response) => {
    try {
      const userId: number = req.body.userConfirmed.user_id;

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

export const addExpirationDate = async (req: Request, res: Response) => {
    try {
       const userId: number = req.body.userConfirmed.user_id;
       const expirationData: IExpiration = req.body;
       const {
         expiration_day,
         user_pm_id,
       } = expirationData;
   
       const parsedDate = new Date(expiration_day);
       if (isNaN(parsedDate.getTime())) {
         return res.status(400).json({ error: "Invalid date format" });
       }
   
       const expiration = {
         expiration_day: parsedDate,
         user_pm_id: user_pm_id,
        //  userPaymentMethod: {
        //    connect: {
        //      user_pm_id: user_pm_id,
        //    },
        //  },
       };
   
       const newExp = await prisma.expirations.create({
         data: expiration,
       });
   
       return res.status(201).json({ message: "Expiration date created successfully", newExp });
    } catch (error) {
       console.error(error);
       return res.status(500).json({ error: "Error creating expiration date" });
    }
   };