"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../routes/auth"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.authPath = '/auth';
        // this.conectarDB()
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.authPath, auth_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
