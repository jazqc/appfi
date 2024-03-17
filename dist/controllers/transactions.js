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
exports.addTransaction = void 0;
const client_1 = require("@prisma/client");
const dateParser_1 = require("../helpers/dateParser");
const prisma = new client_1.PrismaClient();
const addTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userConfirmed.user_id;
        const transactionData = req.body;
        const { transaction_type_id, amount, name, description, category_id, date, is_recurring, recurrency_id, user_payment_method_id, expiration_id, installments, installments_payments } = transactionData;
        // function parseDate(dateString: any) {
        //     const parsedDate = new Date(dateString);
        //     if (isNaN(parsedDate.getTime())) {
        //        return null;
        //     }
        //     return parsedDate;
        //    }
        const parsedTransactionDate = (0, dateParser_1.parseDate)(date);
        if (!parsedTransactionDate) {
            return res.status(400).json({ error: "Formato de fecha invalido" });
        }
        const transaction = {
            transaction_type_id,
            amount,
            name,
            description,
            category_id,
            date: parsedTransactionDate,
            is_recurring,
            recurrency_id,
            user_payment_method_id,
            expiration_id,
            installments,
            installments_payments,
        };
        const newTransaction = yield prisma.transaction.create({
            data: transaction
        });
        return res.status(201).json({ message: "Transaction creada con éxito", newTransaction });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al crear Transaction" });
    }
});
exports.addTransaction = addTransaction;
//# sourceMappingURL=transactions.js.map