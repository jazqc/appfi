import dotenv from "dotenv";
import { Server } from "./models/server";
import { PrismaClient } from "@prisma/client";
import createServer from "./models/server";

const app = createServer();
export const prisma = new PrismaClient();

dotenv.config();

const server = new Server();

server.listen()
