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
const mongoose_1 = require("mongoose");
const autorRepositorio_1 = require("./persistencia/autorRepositorio");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb://localhost:27017/biblioteca';
        try {
            const cliente = yield mongoose_1.connect(url, { useNewUrlParser: true });
            console.log('Conectado com sucesso');
            /*
            console.log('Adicionando autores...');
            let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
            console.log(`Autor inserido: ${a1}`);
            let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
            console.log(`Autor inserido: ${a2}`);
    
            console.log('Adicionando livros...');
            let l1 = await LivroRepositorio.criar({
                titulo:'Node.js com TypeScipt',
                autores:[a1,a2]
            });
            */
            /*
             console.log('Buscando autores...');
             let autores = await AutorRepositorio.buscar();
             autores.forEach(autor => console.log(autor));
             */
            /*
            console.log('Buscando livros...');
             //populate() $lookup, permite fazr integração de diferentes coleções!
            let livros = await LivroRepositorio.buscar();
            livros.forEach(l => console.log(`Autores:${l.autores.map(a => a.ultimo_nome)}`));
             if (cliente && cliente.connection) {
                 cliente.connection.close();
             }
             */
            console.log('Buscar pelo ultimo nome!');
            let autores = yield autorRepositorio_1.AutorRepositorio.buscar();
            autores.forEach(aut => console.log(aut));
        }
        catch (erro) {
            console.log(`Erro: ${erro.message}`);
        }
    });
}
main();
//# sourceMappingURL=index.js.map