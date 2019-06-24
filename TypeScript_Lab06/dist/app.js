"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const livro_rotas_1 = require("./api/livro.rotas");
const app = express_1.default();
app.set('port', process.env.PORT);
app.use(body_parser_1.default.json());
app.use(livro_rotas_1.path, livro_rotas_1.router);
if (process.env.NODE_ENV !== "production") {
    app.use(errorhandler_1.default);
}
exports.default = app;
//# sourceMappingURL=app.js.map