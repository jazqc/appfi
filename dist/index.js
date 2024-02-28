"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield server.app(req, res);
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
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
        const paymentMethods = yield exports.prisma.payment_method.createMany({
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
        exports.prisma.$disconnect();
    }
    catch (error) {
        console.log(error);
        exports.prisma.$disconnect();
    }
});
main();
//# sourceMappingURL=index.js.map