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
exports.addExpirationDate = exports.addUserPaymentMethod = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const addUserPaymentMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userConfirmed.user_id;
        const userPaymentMethodData = req.body;
        const { type_id, subtype, name, description, set_alarm } = userPaymentMethodData;
        const data = {
            user_id: userId,
            type_id,
            subtype,
            name,
            description,
            set_alarm,
        };
        const userPM = yield prisma.user_payment_method.create({
            data: data,
        });
        res.status(201).json({
            msg: "método de pago creado con éxito",
            userPM,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear método de pago" });
    }
});
exports.addUserPaymentMethod = addUserPaymentMethod;
const addExpirationDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userConfirmed.user_id;
        const expirationData = req.body;
        const { closing_day, expiration_day, user_pm_id, } = expirationData;
        function parseDate(dateString) {
            const parsedDate = new Date(dateString);
            if (isNaN(parsedDate.getTime())) {
                return null;
            }
            return parsedDate;
        }
        const parsedExpirationDate = parseDate(expiration_day);
        const parsedClosingDate = parseDate(closing_day);
        if (!parsedExpirationDate || !parsedClosingDate) {
            return res.status(400).json({ error: "Invalid date format for expiration or closing day" });
        }
        const expiration = {
            expiration_day: parsedExpirationDate,
            closing_day: parsedClosingDate,
            user_pm_id: user_pm_id,
        };
        const newExp = yield prisma.expirations.create({
            data: expiration,
        });
        return res.status(201).json({ message: "Expiration date created successfully", newExp });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error creating expiration date" });
    }
});
exports.addExpirationDate = addExpirationDate;
//# sourceMappingURL=paymentMethods.js.map