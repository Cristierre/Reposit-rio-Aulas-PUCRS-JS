import { Livro } from "../entidades/livro";
import {livroModel} from '../modelo/livroModel';
import { autorModel } from "../modelo/autorModel";

export class LivroRepositorio{

    static async emprestarLivro(livro:Livro): Promise<Livro>{
        return livroModel.create(livro);
    }

    static async listarLivos(livro: Livro): Promise<Livro[]>{
        return livroModel.find().populate('autores', autorModel).exec();
    }
}