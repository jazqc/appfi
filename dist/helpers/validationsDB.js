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
exports.existUsername = exports.existEmail = void 0;
const __1 = require("..");
//validación de registro de email
const existEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const existEmail = yield __1.prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (existEmail) {
        throw new Error(`El correo ${email} ya está registrado`);
    }
});
exports.existEmail = existEmail;
//validación de registro de username
const existUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const existUsername = yield __1.prisma.user.findUnique({
        where: {
            username: username
        }
    });
    if (existUsername) {
        throw new Error(`El username ${username} ya está registrado`);
    }
});
exports.existUsername = existUsername;
//validación de formato de birth_date
// export const birthDateFormat = async (birth_date: string): Promise<void> => {
// const parsedBirthDate = new Date(birth_date);
// if (isNaN(parsedBirthDate.getTime())) {
//     res.status(400).json({ msg: "formato de fecha invalida" });
//     return;
// }
// }
//# sourceMappingURL=validationsDB.js.map