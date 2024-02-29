import { Router } from "express";
import {check} from "express-validator";
import { recolectErrors } from "../middlewares/recolectErrors";
import { addUserPaymentMethod } from "../controllers/paymentMethods";
import validarJWT from "../middlewares/validateJWT";


const router = Router();
router.post("/addUserPaymentMethod",
validarJWT,
[   
    check ("user_id", 'el id del usuario es obligatorio').not().isEmpty(),
    check ("type_id", 'el tipo de método es obligatorio').not().isEmpty(), 
    check ("name", 'el nombre del método es obligatorio').not().isEmpty(),
    
    recolectErrors
],
 addUserPaymentMethod)


export default router;

