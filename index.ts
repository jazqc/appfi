import dotenv from "dotenv";
import { Server } from "./models/server";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";



export const prisma = new PrismaClient();

dotenv.config();

const server = new Server();

// server.listen()
export default async (req: Request, res: Response) => {
   await server.app(req, res);
 };