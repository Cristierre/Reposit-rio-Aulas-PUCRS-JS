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
const negocios_1 = require("./negocios/negocios");
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
             
            console.log('Buscar por ultimo nome')
            let autores = await AutorRepositorio.buscarPorUltimoNome();
            autores.forEach(autor => console.log(autor.ultimo_nome));
             */
            /*
            console.log('Buscar por primeiro nome')
            let autores = await AutorRepositorio.buscarPorUltimoNome();
            autores.forEach(autor => console.log(autor.primeiro_nome));
             */
            /*
            console.log('Alterar registro de autor')
            let modificarRegistro = await AutorRepositorio.alterarRegistro('5d07949be391dc2b68c0e799','Michael','Trump');
             console.log(modificarRegistro)
         */
            /*
                 console.log('Cadastrando Livro');
                 let autor = await AutorRepositorio.buscarPorId("5d079842018b0818a0debf15");
                 let autor2 = await AutorRepositorio.buscarPorId("5d07949be391dc2b68c0e799");
                 let livro = await LivroRepositorio.cadastrarLivro({titulo: 'Programação para deficientes',autores:[autor], status: false});
          */
            /*
                    console.log("Buscar livro por id de Autor")
                    let buscarPorAutor = await LivroRepositorio.buscarPorAutor("5d07949be391dc2b68c0e79a");
                    console.log(buscarPorAutor);
            */
            /*
                   console.log('Buscar Livro por id')
                   const idLivro = "5d0a2d3d14170712e84ceafd";
                   let livroEmp = await LivroRepositorio.buscarLivroPorId(idLivro);
                   let emprestimo: Emprestimo;
                   if(livroEmp.status === true){
                        emprestimo = {
                           livro: livroEmp,
                           dataRetirada: new Date(Date.now()),
                           dataEntrega: new Date(Date.now() + 7*24*60*60*1000)
                       }
                       console.log('Cadastrando Emprestimo');
                       let cadastroEmprestimo = await EmprestimoRepositorio.cadastrarEmprestimo(emprestimo);
                       console.log(cadastroEmprestimo);
            
                       let mudarStatus = await LivroRepositorio.modificadorStatusLivro(idLivro);
                       console.log(cadastroEmprestimo)
                   }else{
                       console.log('Livro indisponível no momento!')
                   }
                   
                   */
            /*     const emprestimo = await emprestimoSeteDias("5d0a2de9be7ec91cd8867133");
      
              const buscarLivros = await buscarDetalhadaLivros();
              console.log(buscarLivros);
      
             */
            const emprestimo = yield negocios_1.devolucaoLivro("5d0a2d3d14170712e84ceafd");
            console.log(emprestimo);
            if (cliente && cliente.connection) {
                cliente.connection.close();
            }
        }
        catch (erro) {
            console.log(`Erro: ${erro.message}`);
        }
    });
}
main();
//# sourceMappingURL=index.js.map