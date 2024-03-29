"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const express_validator_1 = require("express-validator");
const validationsDB_1 = require("../helpers/validationsDB");
const recolectErrors_1 = require("../middlewares/recolectErrors");
const auth_2 = require("../controllers/auth");
const validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
const router = (0, express_1.Router)();
router.post("/register", [
    (0, express_validator_1.check)("username", 'el nombre de usuario es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("name", 'el nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("last_name", 'el apellido es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("email", 'el email es obligatorio').isEmail(),
    (0, express_validator_1.check)("password", 'el password debe ser de mínimo 8 digitos').isLength({ min: 8 }),
    (0, express_validator_1.check)("email").custom(validationsDB_1.existEmail),
    (0, express_validator_1.check)("username").custom(validationsDB_1.existUsername),
    (0, express_validator_1.check)("birth_date").not().isEmpty(),
    recolectErrors_1.recolectErrors
], auth_1.createUser);
router.post("/login", [(0, express_validator_1.check)("username", 'el nombre de usuario es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("password", 'el password debe ser de mínimo 8 digitos').not().isEmpty(),
    recolectErrors_1.recolectErrors
], auth_2.login);
router.post("/sendResetPassword", [
    (0, express_validator_1.check)("email", 'el email es obligatorio').isEmail()
], auth_1.sendResetPassword);
router.patch("/resetPassword", validateJWT_1.default, [
    (0, express_validator_1.check)("username", 'el usuario es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("password", 'debe ingresar una nueva contraseña').not().isEmpty(),
], auth_1.resetPassword);
exports.default = router;
//# sourceMappingURL=auth.js.map