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
exports.resetPassword = exports.login = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("@prisma/client");
const constants_1 = require("../helpers/constants");
const generateJWT_1 = require("../helpers/generateJWT");
const dateParser_1 = require("../helpers/dateParser");
const mailer_1 = require("../mailer/mailer");
const prisma = new client_1.PrismaClient();
//Registro de usuario
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const { username, password, rol, email, name, last_name, birth_date, family_in_charge, } = userData;
        //Encriptado
        const salt = bcryptjs_1.default.genSaltSync();
        const hashedPassword = bcryptjs_1.default.hashSync(password, salt);
        //Chequeo de credenciales
        const adminKey = req.headers["admin-key"];
        if (adminKey === process.env.KEYFORADMIN) {
            userData.rol = constants_1.ROLES.admin;
        }
        // const parsedBirthDate = new Date(birth_date);
        // if (isNaN(parsedBirthDate.getTime())) {
        //   res.status(400).json({ msg: "formato de fecha invalida" });
        //   return;
        // }
        const parsedBirthDate = (0, dateParser_1.parseDate)(birth_date);
        if (!parsedBirthDate) {
            return res.status(400).json({ error: "Formato de fecha invalido" });
        }
        const user = yield prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                rol,
                email,
                name,
                last_name,
                birth_date: parsedBirthDate,
                family_in_charge,
            },
        });
        prisma.$disconnect();
        res.json({
            msg: "Usuario creado con éxito", user
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear usuario" });
        prisma.$disconnect();
    }
});
exports.createUser = createUser;
// Login de usuario
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const userInDB = yield prisma.user.findUnique({
            where: {
                username: username,
            },
        });
        if (!userInDB) {
            res.status(400).json({
                msg: "Usuario no registrado",
            });
            return;
        }
        const validatePassword = bcryptjs_1.default.compareSync(password, userInDB.password);
        if (!validatePassword) {
            res.status(401).json({
                msg: "password incorrecto",
            });
            return;
        }
        const token = yield (0, generateJWT_1.generateJWT)(userInDB.user_id);
        res.status(202).json({
            userInDB,
            token,
        });
        if (userInDB.rol === constants_1.ROLES.admin) {
            console.log("el user es admin");
        }
        else {
            console.log("el user no es admin");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor",
        });
    }
});
exports.login = login;
// resetPassword
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield prisma.user.findUnique({
        where: { email: email }
    });
    if (!user) {
        return res.status(400).json({
            msg: "Usuario inexistente",
        });
    }
    const token = yield (0, generateJWT_1.generateJWT)(user.user_id);
    res.status(202).json({
        user,
        token,
    });
    yield (0, mailer_1.sendToken)(email, token);
    res.send("Email enviado");
});
exports.resetPassword = resetPassword;
//# sourceMappingURL=auth.js.map