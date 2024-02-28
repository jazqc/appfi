"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var express_validator_1 = require("express-validator");
var validationsDB_1 = require("../helpers/validationsDB");
var recolectErrors_1 = require("../middlewares/recolectErrors");
var router = (0, express_1.Router)();
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
// router.post("/login", loginUser)
exports.default = router;
