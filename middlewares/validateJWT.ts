import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "..";


//Validación de token
const validarJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["x-token"] as string;

  if (!token) {
    res.status(401).json({
      msg: "No hay token en la petición",
    });

    return;
  }

  try {
    const secretKey = process.env.KEYFORSIGN as string;
    const payload = jwt.verify(token, secretKey) as JwtPayload;

    const { id } = payload;
    const userConfirmed = await prisma.user.findUnique({
    where: {
        user_id: id,
      }
    })
    if (!userConfirmed) {
      res.status(404).json({
        msg: "usuario no encontrado en la DB",
      });
      return;
    }

    req.body.userConfirmed = userConfirmed;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};

export default validarJWT