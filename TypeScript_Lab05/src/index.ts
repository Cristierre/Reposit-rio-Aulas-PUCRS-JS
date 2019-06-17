import {connect} from 'mongoose';
import { AutorRepositorio } from './persistencia/autorRepositorio';
import { AutorModel } from './persistencia/autorModel';
import { LivroRepositorio } from './persistencia/livroRepositorio';

async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');
        /*
        console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);
        
       
        console.log('Buscando autores...');
        let autores = await AutorRepositorio.buscar();
        autores.forEach(autor => console.log(autor));
        */
       /*
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
       console.log('Cadastrar livro');
        let livro = await LivroRepositorio.cadastrarLivro({titulo: 'O Hobbit', autores:);
        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();