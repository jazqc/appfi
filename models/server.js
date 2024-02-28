"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = require("express");
var cors_1 = require("cors");
var auth_1 = require("../routes/auth");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.authPath = '/auth';
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    };
    Server.prototype.routes = function () {
        this.app.use(this.authPath, auth_1.default);
    };
    return Server;
}());
exports.Server = Server;
