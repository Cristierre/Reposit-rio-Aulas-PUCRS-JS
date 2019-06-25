"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const livroRepositorio_1 = require("../persistencia/livroRepositorio");
function getLivros(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('parou aqui');
            const livros = yield livroRepositorio_1.LivroRepositorio.buscar();
            console.log('passou');
            res.json(livros);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getLivros = getLivros;
function getLivro(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            console.log('parou aqui');
            const livro = yield livroRepositorio_1.LivroRepositorio.buscarLivroPorId(id);
            console.log('passou');
            if (livro === null) {
                res.status(404).end();
            }
            else {
                //filtragem de exposição dos dados
                const { titulo, autores } = livro;
                res.json({ titulo, autores });
            }
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getLivro = getLivro;
//# sourceMappingURL=livro.controlador.js.map