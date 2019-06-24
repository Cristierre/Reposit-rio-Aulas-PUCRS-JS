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
const emprestimoModel_1 = require("./emprestimoModel");
const livroModel_1 = require("./livroModel");
class EmprestimoRepositorio {
    static cadastrarEmprestimo(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            let novoEmprestimo = yield emprestimoModel_1.EmprestimoModel.create(emprestimo);
            console.log("Emprestimo cadastrado com sucesso");
        });
    }
    static buscarEmprestimo() {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = emprestimoModel_1.EmprestimoModel.find().populate('livro', livroModel_1.LivroModel).exec();
            return consulta;
        });
    }
}
exports.EmprestimoRepositorio = EmprestimoRepositorio;
//# sourceMappingURL=emprestimoRepositorio.js.map