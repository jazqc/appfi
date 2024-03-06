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
    try {
        const paymentMethods = yield exports.prisma.payment_method.createMany({
            data: [
                {
                    name: "Credit",
                },
                {
                    name: "Debit",
                },
                {
                    name: "Cash",
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
//    async function deleteAllUserPM() {
//     try {
//        await prisma.user_payment_method.deleteMany();
//        await prisma.$executeRaw`ALTER SEQUENCE public."Payment_method_pm_type_id_seq" RESTART WITH 1`;
//        console.log('All payment methods have been deleted and the sequence has been reset.');
//     } catch (error) {
//        console.error('Error deleting payment methods or resetting sequence:', error);
//        throw error; 
//     } finally {
//        await prisma.$disconnect();
//     }
//    }
//    deleteAllUserPM()
//     .catch((error) => {
//        console.error('Error in deleteAllPM:', error);
//     });
//# sourceMappingURL=index.js.map