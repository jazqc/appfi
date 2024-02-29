import dotenv from "dotenv";
import { Server } from "./models/server";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma = new PrismaClient();

dotenv.config();

const server = new Server();

server.listen()
export default async (req: Request, res: Response) => {
  await server.app(req, res);
};

// const main = async () => {

//   try {
//     const paymentMethods = await prisma.payment_method.createMany({
//       data: [
//         {
//           name: "Credit",
//         },
//         {
//           name: "Debit",
//         },
//         {
//           name: "Cash",
//         },
//       ],
//     });
//     console.log(paymentMethods);
//     prisma.$disconnect();
//   } catch (error) {
//     console.log(error);
//     prisma.$disconnect();
//   }
// };

// main();

// async function deleteAllPM() {
//    try {

//       await prisma.payment_method.deleteMany();

//       await prisma.$executeRaw`ALTER SEQUENCE public."Payment_method_pm_type_id_seq" RESTART WITH 1`;
  
//       console.log('All payment methods have been deleted and the sequence has been reset.');
//    } catch (error) {
//       console.error('Error deleting payment methods or resetting sequence:', error);
//       throw error; 
//    } finally {
   
//       await prisma.$disconnect();
//    }
//   }
  
//   deleteAllPM()
//    .catch((error) => {
//       console.error('Error in deleteAllPM:', error);
  
//    });