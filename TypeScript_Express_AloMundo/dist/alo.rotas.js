"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aloControlador = __importStar(require("./alo.controlador"));
const express_1 = require("express"); //  para configurar as rotas
exports.router = express_1.Router();
const path = '/alo';
// se path faça isso... callback!
exports.router.get(path);
exports.router.get(`${path}/:nome`, aloControlador.getAloComNome);
exports.router.get(`${path}/erro`, aloControlador.getAloErro);
//# sourceMappingURL=alo.rotas.js.map