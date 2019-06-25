import {Request, Response, NextFunction} from 'express';
import * as negocio from '../negocios/negocios';
import { LivroRepositorio } from '../persistencia/livroRepositorio';

export async function getLivros(req: Request, res: Response, next:NextFunction){
    try{
        console.log('parou aqui')
        const livros = await LivroRepositorio.buscar();
        console.log('passou')
        res.json(livros);
    }catch(error){
        next(error);
    }
}

export async function getLivro(req: Request, res: Response, next: NextFunction){
    try{
    const id = req.params.id
    console.log('parou aqui')          
    const livro = await LivroRepositorio.buscarLivroPorId(id);
    console.log('passou')
    if(livro === null) {
        res.status(404).end();
    }else{
        //filtragem de exposição dos dados
        const {titulo,autores} = livro;
        res.json({titulo,autores});
    }
    }catch(error){
        next(error);
    }
}