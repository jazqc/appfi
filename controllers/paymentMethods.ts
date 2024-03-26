
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IExpiration, IUserPaymentMethod } from "../models/payment_methods";
import { parseDate } from "../helpers/dateParser";

const prisma = new PrismaClient();

//Agregar métodos de pago para un usuario
export const addUserPaymentMethod = async (req: Request, res: Response) => {
    try {
      const userId: number = req.body.userConfirmed.user_id;

        const userPaymentMethodData: IUserPaymentMethod = req.body;
        const {
            
            type_id,
            subtype,
            name,
            description,
            set_alarm
        } = userPaymentMethodData;

        const data = {
            user_id: userId,
            type_id,
            subtype,
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

export const getUserPaymentMethods = async (req: Request, res: Response) => {
  try {
     const userId: number = req.body.userConfirmed.user_id;
     const userPaymentMethods = await prisma.user_payment_method.findMany({
       where: {
         user_id: userId,
       },
     });
 
     res.status(200).json({
       data: userPaymentMethods,
     });
  } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Error al traer los métodos de pago del usuario' });
  }
 };

//  export const modifyUserPaymentMethods = async (req: Request, res: Response) => {
//   try {
//     const userId: number = req.body.userConfirmed.user_id;
//     const userPaymentMethodToModify = req.body
//     const {user_pm_id} = userPaymentMethodToModify
//     const modifyUserPaymethMethodData = await prisma.user_payment_method.findUnique({
//       where: {
//         user_pm_id: userPaymentMethodToModify
//       }
//     })
//   } catch (error) {
    
//   }

//  }
//Traer Efectivo, Crédito, Débito
 export const getPaymentMethods = async (req: Request, res: Response) => {
  try {
     const paymentMethods = await prisma.payment_method.findMany();
 
     res.status(200).json({
       data: paymentMethods,
     });
  } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Error al traer los métodos de pago' });
  }
 };

export const addExpirationDate = async (req: Request, res: Response) => {
  try {
     const userId: number = req.body.userConfirmed.user_id;
     const expirationData: IExpiration = req.body;
     const {
      closing_day,
       expiration_day,
       user_pm_id,
     } = expirationData;
 
    //  function parseDate(dateString: any) {
    //   const parsedDate = new Date(dateString);
    //   if (isNaN(parsedDate.getTime())) {
    //      return null;
    //   }
    //   return parsedDate;
    //  }
     const parsedExpirationDate = parseDate(expiration_day);
     const parsedClosingDate = parseDate(closing_day);

     if (!parsedExpirationDate || !parsedClosingDate) {
       return res.status(400).json({ error: "Formato de fecha invalido" });
     }

     const expiration = {
       expiration_day: parsedExpirationDate,
       closing_day: parsedClosingDate,
       user_pm_id: user_pm_id,
     };
 
     const newExp = await prisma.expirations.create({
       data: expiration,
     });
 
     return res.status(201).json({ message: "Fechas agregadas correctamente", newExp });
  } catch (error) {
     console.error(error);
     return res.status(500).json({ error: "Error al crear las fechas" });
  }
};

export const getExpirationDates = async (req: Request, res: Response) => {
  try {
     const userId: number = req.body.userConfirmed.user_id;
     const userPmId: number = req.body.user_pm_id;
     const userPMethodExpirationDates = await prisma.expirations.findMany({
       where: {
         user_pm_id: userPmId,
       },
     });
 
     res.status(200).json({
       data: userPMethodExpirationDates,
     });
  } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Error al traer las fechas de cierre y vencimiento del método de pago' });
  }
 };

export const modifyExpirationDates = async (req: Request, res: Response) => {
    const user_id: number = req.body.userConfirmed.user_id;
    const {expiration_id, closing_day, expiration_day}: IExpiration = req.body
    function parseDate(dateString: any) {
      const parsedDate = new Date(dateString);
      if (isNaN(parsedDate.getTime())) {
         return null;
      }
      return parsedDate;
     }
     const parsedExpirationDate = parseDate(expiration_day);
     const parsedClosingDate = parseDate(closing_day);

     if (!parsedExpirationDate || !parsedClosingDate) {
       return res.status(400).json({ error: "Formato de fecha invalido" });
     }
    try {
      const modifiedExpiration = await prisma.expirations.update({
        where: {
          expiration_id: expiration_id,
        },
        data: {
          closing_day: parsedClosingDate,
          expiration_day: parsedExpirationDate
        }
     });
     res.status(200).json({msg: "Fechas modificadas",
      data: modifiedExpiration,
    });
 } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al modificar las fechas' });
 }
}