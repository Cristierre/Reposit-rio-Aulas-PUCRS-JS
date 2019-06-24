import {Request, Response, NextFunction} from 'express';
import * as negocio from '../negocios/negocios';
import { LivroRepositorio } from '../persistencia/livroRepositorio';
import { Resolver } from 'dns';

export async function getLivros(req: Request, res: Response, next:NextFunction){
    try{
        const livros = await LivroRepositorio.buscar();
        res.json(livros);
    }catch(error){
        next(error);
    }
}

export async function getLivro(req: Request, res: Response, next: NextFunction){
    try{
    const id = req.params.id          
    const livro = await LivroRepositorio.buscarLivroPorId(id);
    res.json
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