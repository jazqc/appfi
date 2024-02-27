"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("./models/server");
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
dotenv_1.default.config();
const server = new server_1.Server();
server.listen();
//# sourceMappingURL=index.js.map