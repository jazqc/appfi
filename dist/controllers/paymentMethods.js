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
exports.modifyExpirationDates = exports.getExpirationDates = exports.addExpirationDate = exports.getPaymentMethods = exports.getUserPaymentMethods = exports.addUserPaymentMethod = void 0;
const client_1 = require("@prisma/client");
const dateParser_1 = require("../helpers/dateParser");
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
const getUserPaymentMethods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userConfirmed.user_id;
        const userPaymentMethods = yield prisma.user_payment_method.findMany({
            where: {
                user_id: userId,
            },
        });
        res.status(200).json({
            data: userPaymentMethods,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al traer los métodos de pago del usuario' });
    }
});
exports.getUserPaymentMethods = getUserPaymentMethods;
const getPaymentMethods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentMethods = yield prisma.payment_method.findMany();
        res.status(200).json({
            data: paymentMethods,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al traer los métodos de pago' });
    }
});
exports.getPaymentMethods = getPaymentMethods;
const addExpirationDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userConfirmed.user_id;
        const expirationData = req.body;
        const { closing_day, expiration_day, user_pm_id, } = expirationData;
        //  function parseDate(dateString: any) {
        //   const parsedDate = new Date(dateString);
        //   if (isNaN(parsedDate.getTime())) {
        //      return null;
        //   }
        //   return parsedDate;
        //  }
        const parsedExpirationDate = (0, dateParser_1.parseDate)(expiration_day);
        const parsedClosingDate = (0, dateParser_1.parseDate)(closing_day);
        if (!parsedExpirationDate || !parsedClosingDate) {
            return res.status(400).json({ error: "Formato de fecha invalido" });
        }
        const expiration = {
            expiration_day: parsedExpirationDate,
            closing_day: parsedClosingDate,
            user_pm_id: user_pm_id,
        };
        const newExp = yield prisma.expirations.create({
            data: expiration,
        });
        return res.status(201).json({ message: "Fechas agregadas correctamente", newExp });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al crear las fechas" });
    }
});
exports.addExpirationDate = addExpirationDate;
const getExpirationDates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userConfirmed.user_id;
        const userPmId = req.body.user_pm_id;
        const userPMethodExpirationDates = yield prisma.expirations.findMany({
            where: {
                user_pm_id: userPmId,
            },
        });
        res.status(200).json({
            data: userPMethodExpirationDates,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al traer las fechas de cierre y vencimiento del método de pago' });
    }
});
exports.getExpirationDates = getExpirationDates;
const modifyExpirationDates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.body.userConfirmed.user_id;
    const { expiration_id, closing_day, expiration_day } = req.body;
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
        return res.status(400).json({ error: "Formato de fecha invalido" });
    }
    try {
        const modifiedExpiration = yield prisma.expirations.update({
            where: {
                expiration_id: expiration_id,
            },
            data: {
                closing_day: parsedClosingDate,
                expiration_day: parsedExpirationDate
            }
        });
        res.status(200).json({ msg: "Fechas modificadas",
            data: modifiedExpiration,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al modificar las fechas' });
    }
});
exports.modifyExpirationDates = modifyExpirationDates;
//# sourceMappingURL=paymentMethods.js.map