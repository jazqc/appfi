import { Router } from "express";
import { createUser, resetPassword, sendResetPassword } from "../controllers/auth";
import {check} from "express-validator";
import { existEmail, existUsername } from "../helpers/validationsDB";
import { recolectErrors } from "../middlewares/recolectErrors";
import { login } from "../controllers/auth"


const router = Router();
router.post("/register",
[   
    check ("username", 'el nombre de usuario es obligatorio').not().isEmpty(),
    check ("name", 'el nombre es obligatorio').not().isEmpty(), 
    check ("last_name", 'el apellido es obligatorio').not().isEmpty(),
    check ("email", 'el email es obligatorio').isEmail(), 
    check ("password", 'el password debe ser de mínimo 8 digitos').isLength({min: 8}), 
    check ("email").custom(existEmail),     
    check ("username").custom(existUsername),
    check ("birth_date").not().isEmpty(),
    
    recolectErrors
],
 createUser)

router.post("/login",
[check ("username", 'el nombre de usuario es obligatorio').not().isEmpty(),
check ("password", 'el password debe ser de mínimo 8 digitos').not().isEmpty(),
recolectErrors
], login)

router.post("/sendResetPassword", [
    check ("email", 'el email es obligatorio').isEmail()  
],
 sendResetPassword)
 
 router.patch("/resetPassword", [
    check ("username", 'el usuario es obligatorio').not().isEmpty(),
    check ("password", 'debe ingresar una nueva contraseña').not().isEmpty(),  

],
resetPassword)



export default router;