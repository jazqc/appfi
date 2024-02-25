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
        const { username, password, rol, email, name, last_name, age, family_in_charge } = userData;
        const salt = bcryptjs.genSaltSync();
        const hashedPassword = bcryptjs.hashSync(password, salt);
        console.log("check")
        const adminKey = req.headers["admin-key"];
        if (adminKey === process.env.KEYFORADMIN) {
            userData.rol = ROLES.admin;
        }


        if (!username || !password || !email || !name || !last_name || !age) {
            res.json({
                msg: "Faltan datos"
            });
            return;
        }

        const userInDB = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (userInDB) {
            res.json({
                msg: "El email ya se encuentra registrado"
            });
            return;
        }

 
        const user = await prisma.user.create({
            data: {
             username, password: hashedPassword, rol, email, name, last_name, age, family_in_charge
           
            }
        });


        prisma.$disconnect();


        res.json({
            msg: "Usuario creado con éxito"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error creating user" });
        prisma.$disconnect();
    }
};
