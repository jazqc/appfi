import express, {Express} from "express";
import cors from "cors";
import authRoutes from "../routes/auth"
import paymentMethodsRoutes from "../routes/payment_met"
import transactionsRoutes from "../routes/transaction"



export class Server {

    app: Express
    port: string | number | undefined
    authPath: string
    paymentMethodsPath: string
    transactionsPath: string


    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/auth';
        this.paymentMethodsPath = '/payment_met'
        this.transactionsPath = '/transaction'

        this.middlewares()
        this.routes()
    }


    middlewares(): void {
        this.app.use(express.json())
        this.app.use(cors())

    }

    routes(): void {
        this.app.use(this.authPath, authRoutes)
        this.app.use(this.paymentMethodsPath, paymentMethodsRoutes)
        this.app.use(this.transactionsPath, transactionsRoutes)
 
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en puerto ${this.port}`);
        })
    }

}

