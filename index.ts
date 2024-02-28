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

const main = async () => {

   // async function deleteAllPM() {
   //    await prisma.payment_method.deleteMany();
      
   //   }
     
   //   deleteAllPM()
   //    .catch((e) => {
   //       throw e;
   //    })
   //    .finally(async () => {
   //       await prisma.$disconnect();

   //    });
   // }

  try {
    const paymentMethods = await prisma.payment_method.createMany({
      data: [
        {
          name: "CREDIT",
        },
        {
          name: "DEBIT",
        },
        {
          name: "CASH",
        },
      ],
    });
    console.log(paymentMethods);
    prisma.$disconnect();
  } catch (error) {
    console.log(error);
    prisma.$disconnect();
  }
};

main();
