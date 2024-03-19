import { Request, Response } from "express";
import { IUser } from "../models/user";
import bcryptjs from "bcryptjs";
import {PrismaClient} from "@prisma/client";
import { ROLES } from "../helpers/constants";
import { generateJWT } from "../helpers/generateJWT";
import { parseDate } from "../helpers/dateParser";
import jwt from "jsonwebtoken";
import { sendToken } from "../mailer/mailer";

const prisma = new PrismaClient();

//Registro de usuario

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData: IUser = req.body;
    const {
      username,
      password,
      rol,
      email,
      name,
      last_name,
      birth_date,
      family_in_charge,
    } = userData;
    //Encriptado
    const salt = bcryptjs.genSaltSync();
    const hashedPassword = bcryptjs.hashSync(password, salt);
    //Chequeo de credenciales
    const adminKey = req.headers["admin-key"];
    if (adminKey === process.env.KEYFORADMIN) {
      userData.rol = ROLES.admin;
    }


    // const parsedBirthDate = new Date(birth_date);
    // if (isNaN(parsedBirthDate.getTime())) {
    //   res.status(400).json({ msg: "formato de fecha invalida" });
    //   return;
    // }
    const parsedBirthDate = parseDate(birth_date);
    if (!parsedBirthDate) {
     return res.status(400).json({ error: "Formato de fecha invalido" });
   }

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        rol,
        email,
        name,
        last_name,
        birth_date: parsedBirthDate,
        family_in_charge,
      },
    });

    prisma.$disconnect();

    res.json({
      msg: "Usuario creado con éxito", user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al crear usuario" });
    prisma.$disconnect();
  }
};

// Login de usuario
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password }: IUser = req.body;
    const userInDB = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!userInDB) {
      res.status(400).json({
        msg: "Usuario no registrado",
      });
      return;
    }

    const validatePassword = bcryptjs.compareSync(password, userInDB.password);
    if (!validatePassword) {
      res.status(401).json({
        msg: "password incorrecto",
      });
      return;
    }

    const token = await generateJWT(userInDB.user_id);
    res.status(202).json({
      userInDB,
      token,
    });

    if (userInDB.rol === ROLES.admin) {
      console.log("el user es admin");
    } else {
      console.log("el user no es admin");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

// resetPassword

export const resetPassword = async (req: Request, res: Response) => {
  try {
     const { email } = req.body;
     const user = await prisma.user.findUnique({
       where: { email: email },
     });
 
     if (!user) {
       return res.status(400).json({
         msg: "Email inexistente",
       });
     }
 
     const token = await generateJWT(user.user_id); 
     await sendToken(email, token); 
     res.status(202).json({
       msg: "email enviado",
     });
  } catch (error) {
     console.error(error);
     res.status(500).json({
       msg: "Error",
     });
  }
 };