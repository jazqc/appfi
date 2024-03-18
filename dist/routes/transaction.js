"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const recolectErrors_1 = require("../middlewares/recolectErrors");
const validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
const transactions_1 = require("../controllers/transactions");
const router = (0, express_1.Router)();
router.post("/addTransaction", validateJWT_1.default, [
    (0, express_validator_1.check)("transaction_type_id", 'el tipo de transacción es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("amount", 'el monto es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("name", 'Debe asignarle un título a la transacción').not().isEmpty(),
    (0, express_validator_1.check)("category_id", "Debe asignarle una categoría").not().isEmpty(),
    (0, express_validator_1.check)("date", "La fecha es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("category_id", "Debe asignarle una categoría").not().isEmpty(),
    (0, express_validator_1.check)("user_payment_method_id", "Debe asignarle un método de pago").not().isEmpty(),
    recolectErrors_1.recolectErrors
], transactions_1.addTransaction);
exports.default = router;
//# sourceMappingURL=transaction.js.map