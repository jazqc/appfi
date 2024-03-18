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
exports.sendToken = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
require('dotenv').config();
exports.transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'equipo.perfi@gmail.com',
        pass: process.env.KEYFOREMAIL
    },
    from: 'equipo.perfi@gmail.com'
});
const sendToken = (to, token) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: '"PerfiApp" equipo.perfi@gmail.com',
        to,
        subject: 'Recuperación de contraseña',
        text: `
            Recibiste este correo porque se solicitó el reseteo de contraseña. Si no fuiste tu, alguien más podría estar intentando ingresar a tu cuenta.
            Para reiniciar tu contraseña, por favor ingrese al siguiente link: \n
            http://localhost:3000/reset/${token}

             \n
             
            `
    };
    try {
        yield exports.transporter.sendMail(mailOptions);
        console.log("correo electrónico enviado");
    }
    catch (error) {
        console.log("Error al enviar el correo electrónico: ", error);
    }
});
exports.sendToken = sendToken;
//# sourceMappingURL=mailer.js.map