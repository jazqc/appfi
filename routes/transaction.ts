import { Router } from "express";
import {check} from "express-validator";
import { recolectErrors } from "../middlewares/recolectErrors";
import validarJWT from "../middlewares/validateJWT";
import { addTransaction } from "../controllers/transactions";


const router = Router();
router.post("/addTransaction",
validarJWT,
[   
    check ("transaction_type_id", 'el tipo de transacción es obligatorio').not().isEmpty(), 
    check ("amout", 'el monto es obligatorio').not().isEmpty(),
    check ("name", 'Debe asignarle un título a la transacción').not().isEmpty(),
    check ("category_id", "Debe asignarle una categoría").not().isEmpty(),
    check ("date", "La fecha es obligatoria").not().isEmpty(),
    check ("category_id", "Debe asignarle una categoría").not().isEmpty(),
    check ("user_payment_method", "Debe asignarle un método de pago").not().isEmpty(),
    recolectErrors
],
addTransaction
)

export default router