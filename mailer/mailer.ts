import nodemailer from 'nodemailer';
require('dotenv').config();

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'equipo.perfi@gmail.com',
        pass: process.env.KEYFOREMAIL
    },
from: 'equipo.perfi@gmail.com'
});


export const sendToken = async (to: string, token: string): Promise<void> => {

    const mailOptions = {
        from: '"PerfiApp" equipo.perfi@gmail.com',
        to,
        subject: 'Recuperación de contraseña',
        text: `
            Recibiste este correo porque se solicitó el reseteo de contraseña. Si no fuiste tu, alguien más podría estar intentando ingresar a tu cuenta.
            Para reiniciar tu contraseña, por favor ingrese al siguiente link: \n
            http://localhost:3000/reset/${token}

             \n
             
            `
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log("correo electrónico enviado")
    } catch (error) {
        console.log("Error al enviar el correo electrónico: ", error)
    }
}