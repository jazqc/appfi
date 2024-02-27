import dotenv from "dotenv";
import { Server } from "./models/server";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

dotenv.config();

export const server = new Server();

server.listen()
