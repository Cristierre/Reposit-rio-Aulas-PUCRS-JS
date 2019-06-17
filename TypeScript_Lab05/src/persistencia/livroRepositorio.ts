import {LivroModel} from './livroModel'
import {AutorModel} from './autorModel'
import {Livro} from '../entidades/livro'
import { Autor } from '../entidades/autor';

export class LivroRepositorio{

    static async cadastrarLivro(livro: Livro): Promise<Livro>{
        let novoLivro = await LivroModel.create(livro);
        return novoLivro;
    }

}