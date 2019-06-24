"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador = __importStar(require("./livro.controlador"));
exports.router = express_1.Router();
exports.path = '/livros';
exports.router.get('', controlador.getLivros);
exports.router.get('/:id', controlador.getLivro);
//# sourceMappingURL=livro.rotas.js.map