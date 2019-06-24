import {LivroModel} from './livroModel'
import {AutorModel} from './autorModel'
import {Livro} from '../entidades/livro'
import { Autor } from '../entidades/autor';
import { stringify } from 'querystring';

export class LivroRepositorio{

    static async cadastrarLivro(livro: Livro){
    let novoLivro = await LivroModel.create(livro); 
    console.log(`Livro cadastrado ${novoLivro}`);      
    }

    static async buscar(): Promise<Livro[]> {
        let consulta = LivroModel.find().populate('autores', AutorModel).exec();        
        return consulta;
    }

    static async buscarPorAutor(id: string): Promise<Livro[]>{
        let livroAutor = LivroModel.where('autores').equals(id).populate('autores', AutorModel).exec();
        return livroAutor;
    }
    static async buscarLivroPorId(id: string): Promise<Livro>{
        let livro = await LivroModel.findById(id).exec();
        if(livro !== null){
            return livro;
        }else{
            throw new Error("Livro não está na base de dados!");
        }       
    }

    static async modificadorStatusLivro(id: string, status: boolean = true): Promise<void>{
        let emprestar = await LivroModel.updateOne({_id: id}, {status: status});
    }

}