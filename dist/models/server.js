"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("../routes/auth"));
const payment_met_1 = __importDefault(require("../routes/payment_met"));
const transaction_1 = __importDefault(require("../routes/transaction"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.authPath = '/auth';
        this.paymentMethodsPath = '/payment_met';
        this.transactionsPath = '/transaction';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(this.authPath, auth_1.default);
        this.app.use(this.paymentMethodsPath, payment_met_1.default);
        this.app.use(this.transactionsPath, transaction_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map