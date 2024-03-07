import { Router } from "express";
import {check} from "express-validator";
import { recolectErrors } from "../middlewares/recolectErrors";
import { addExpirationDate, addUserPaymentMethod, getUserPaymentMethods } from "../controllers/paymentMethods";
import validarJWT from "../middlewares/validateJWT";


const router = Router();
router.post("/addUserPaymentMethod",
validarJWT,
[   
    check ("type_id", 'el tipo de método es obligatorio').not().isEmpty(), 
    check ("subtype", 'el subtipo de método es obligatorio').not().isEmpty(),
    check ("name", 'el nombre del método es obligatorio').not().isEmpty(),
    
    recolectErrors
],
 addUserPaymentMethod)

 router.get("/getUserPaymentMethods",
 validarJWT,
  getUserPaymentMethods)

router.post("/addExpirationDate",
validarJWT,
[   
    check ("closing_day", 'la fecha de cierre es obligatoria').not().isEmpty(),
    check ("expiration_day", 'la fecha de vencimiento es obligatoria').not().isEmpty(),
    check ("user_pm_id", 'el user_pm_id es obligatorio').not().isEmpty(), 
    
    recolectErrors
], addExpirationDate)


export default router;


