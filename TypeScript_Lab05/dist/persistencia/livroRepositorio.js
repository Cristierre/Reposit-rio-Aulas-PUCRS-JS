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
const livroModel_1 = require("./livroModel");
const autorModel_1 = require("./autorModel");
class LivroRepositorio {
    static cadastrarLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            let novoLivro = yield livroModel_1.LivroModel.create(livro);
            console.log(`Livro cadastrado ${novoLivro}`);
        });
    }
    static buscar() {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = livroModel_1.LivroModel.find().populate('autores', autorModel_1.AutorModel).exec();
            return consulta;
        });
    }
    static buscarPorAutor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let livroAutor = livroModel_1.LivroModel.where('autores').equals(id).populate('autores', autorModel_1.AutorModel).exec();
            return livroAutor;
        });
    }
    static buscarLivroPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let livro = yield livroModel_1.LivroModel.findById(id).exec();
            if (livro !== null) {
                return livro;
            }
            else {
                throw new Error("Livro não está na base de dados!");
            }
        });
    }
}
exports.LivroRepositorio = LivroRepositorio;
//# sourceMappingURL=livroRepositorio.js.map