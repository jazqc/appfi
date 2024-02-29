"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const recolectErrors_1 = require("../middlewares/recolectErrors");
const paymentMethods_1 = require("../controllers/paymentMethods");
const validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
const router = (0, express_1.Router)();
router.post("/addUserPaymentMethod", validateJWT_1.default, [
    (0, express_validator_1.check)("user_id", 'el id del usuario es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("type_id", 'el tipo de método es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("name", 'el nombre del método es obligatorio').not().isEmpty(),
    recolectErrors_1.recolectErrors
], paymentMethods_1.addUserPaymentMethod);
exports.default = router;
//# sourceMappingURL=payment_met.js.map