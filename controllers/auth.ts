import { Request, Response } from "express";
import { IUser } from '../models/user';
import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { ROLES } from "../helpers/constants";
import { generateJWT } from "../helpers/generateJWT";


const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
    try {
        const userData: IUser = req.body;
        const { username, password, rol, email, name, last_name, birth_date, family_in_charge } = userData;
        //Encriptado
        const salt = bcryptjs.genSaltSync();
        const hashedPassword = bcryptjs.hashSync(password, salt);
        //Chequeo de credenciales
        const adminKey = req.headers["admin-key"];
        if (adminKey === process.env.KEYFORADMIN) {
            userData.rol = ROLES.admin;
        }


        //Validaciones
        // const isValidPassword = (password: string): boolean => {

        //     if (password.length < 8) {
        //         return false;
        //     }

        //     return true;
        // };


        // if (!isValidPassword(password)) {
        //     res.status(400).json({ msg: "La contraseña debe tener al menos 8 caracteres" });
        //     return;
        // }

        const parsedBirthDate = new Date(birth_date);
        if (isNaN(parsedBirthDate.getTime())) {
            res.status(400).json({ msg: "formato de fecha invalida" });
            return;
        }


        //Chequeo de campos
        // if (!username || !password || !email || !name || !last_name || !birth_date) {
        //     res.json({
        //         msg: "Faltan datos"
        //     });
        //     return;
        // }

        // const userInDB = await prisma.user.findUnique({
        //     where: {
        //         email: email
        //     }
        // });

        // if (userInDB) {
        //     res.json({
        //         msg: "El email ya se encuentra registrado"
        //     });
        //     return;
        // }

        // const usernameInDB = await prisma.user.findUnique({
        //     where: {
        //         username: username
        //     }
        // });

        // if (usernameInDB) {
        //     res.json({
        //         msg: "El username ya se encuentra registrado"
        //     });
        //     return;
        // }



        //Creación de usuario

        const user = await prisma.user.create({
            data: {
                username, password: hashedPassword, rol, email, name, last_name, birth_date: parsedBirthDate, family_in_charge
            }
        });

        prisma.$disconnect();

        res.json({
            msg: "Usuario creado con éxito"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear usuario" });
        prisma.$disconnect();
    }
};


//Login de usuario
// export const login = async (req: Request, res: Response): Promise<void> => {
//     const { username, password }: IUser = req.body;

//     try {
//         const user = await prisma.user.findUnique({
//             where: {
//                 username: username
//             }
//         })

//         if (!user) {
//             res.status(400).json({
//                 msg: "Usuario no registrado"
//             })
//             return
//         }

//         const validatePassword = bcryptjs.compareSync(password, user.password);
//         if (!validatePassword) {
//             res.status(401).json({
//                 msg: "password incorrecto"
//             });
//             return
//         };

//         const token = await generateJWT(user.user_id)
//         res.status(202).json({
//             user,
//             token
//         })

//         if (user.rol === ROLES.admin) {
//             console.log("el user es admin")
//         } else {
//             console.log("el user no es admin")
//         }


//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: "Error en el servidor"
//         })
//     }

// }