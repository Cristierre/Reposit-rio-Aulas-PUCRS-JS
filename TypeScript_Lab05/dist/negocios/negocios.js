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
const emprestimoRepositorio_1 = require("../persistencia/emprestimoRepositorio");
function buscarDetalhadaLivros() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Buscando todos os livros da coleção");
        let buscarLivro = yield livroRepositorio_1.LivroRepositorio.buscar();
        let emprestimos = yield emprestimoRepositorio_1.EmprestimoRepositorio.buscarEmprestimo();
        buscarLivro.forEach(l => {
            console.log(l);
            emprestimos.forEach(element => {
                console.log(l.titulo);
                if (l.status === false && element.livro.titulo === l.titulo) {
                    console.log(`Livro "${l.titulo}" indisponível no momento, data de devolução: ${element.dataEntrega}`);
                }
            });
        });
    });
}
exports.buscarDetalhadaLivros = buscarDetalhadaLivros;
function emprestimoSeteDias(idLivro) {
    return __awaiter(this, void 0, void 0, function* () {
        let livroEmp = yield livroRepositorio_1.LivroRepositorio.buscarLivroPorId(idLivro);
        let emprestimo;
        if (livroEmp.status === true) {
            emprestimo = {
                livro: livroEmp,
                dataRetirada: new Date(Date.now()),
                dataEntrega: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            };
            yield livroRepositorio_1.LivroRepositorio.modificadorStatusLivro(idLivro, false);
            let cadastroEmprestimo = yield emprestimoRepositorio_1.EmprestimoRepositorio.cadastrarEmprestimo(emprestimo);
            console.log(cadastroEmprestimo);
        }
        else {
            console.log('Livro indisponível no momento!');
        }
    });
}
exports.emprestimoSeteDias = emprestimoSeteDias;
function devolucaoLivro(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const diffData = (entrega, estimativa) => {
            const diffDate = entrega.getTime() - estimativa.getTime();
            let day = Math.trunc(((diffDate % 31536000000) % 2628000000) / 86400000);
            return day;
        };
        yield livroRepositorio_1.LivroRepositorio.modificadorStatusLivro(id);
        const emprestimo = yield emprestimoRepositorio_1.EmprestimoRepositorio.buscarEmprestimo();
        const dataEnt = new Date(Date.now());
        const livroAchado = yield livroRepositorio_1.LivroRepositorio.buscarLivroPorId(id);
        let dataRet = new Date(Date.now());
        emprestimo.forEach(e => {
            if (e.livro.titulo === livroAchado.titulo) {
                console.log(e.dataEntrega);
                dataRet = e.dataEntrega;
                console.log(dataRet);
            }
        });
        if (!dataRet)
            console.log('Sem data');
        console.log(dataRet);
        let dias = diffData(dataEnt, dataRet);
        if (dias > 0) {
            dias = dias * 2.5;
            return `Atraso no valor de R$${dias}`;
        }
        else
            return "Livro devolvido";
    });
}
exports.devolucaoLivro = devolucaoLivro;
//# sourceMappingURL=negocios.js.map