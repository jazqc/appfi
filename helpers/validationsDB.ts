import { prisma } from ".."
import { IUser } from "../models/user"


//validación de registro de email
export const existEmail = async (email: string): Promise<void> => {
    const existEmail = await prisma.user.findUnique({
        where:
        {
            email: email
        }
    })

    if (existEmail) {
        throw new Error(`El correo ${email} ya está registrado`)
    }

}

//validación de registro de username
export const existUsername = async (username: string): Promise<void> => {
    const existUsername = await prisma.user.findUnique({
        where:
        {
            username: username
        }
    })

    if (existUsername) {
        throw new Error(`El username ${username} ya está registrado`)
    }

}

//validación de formato de birth_date
// export const birthDateFormat = async (birth_date: string): Promise<void> => {
// const parsedBirthDate = new Date(birth_date);
// if (isNaN(parsedBirthDate.getTime())) {
//     res.status(400).json({ msg: "formato de fecha invalida" });
//     return;
// }
// }