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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserPaymentMethod = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const addUserPaymentMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body.
        ;
        const userPaymentMethodData = req.body;
        const data = {
            user_id,
        };
        const userPM = new UserPaymentMethod(data);
        yield prisma.user_payment_method.create();
        res.status(201).json({
            msg: "método de pago creado con éxito"
        });
    }
    finally {
    }
});
exports.addUserPaymentMethod = addUserPaymentMethod;
//# sourceMappingURL=paymentMethods.js.map