import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export class AutorRepositorio {
    static async criar(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor.save();
    }

    static async buscar(): Promise<Autor[]> {
        let consulta = AutorModel.find();
        return consulta.exec();
    }

    static async buscarPeloNome(nome: string): Promise<Autor[]>{
        let consulta = AutorModel.where(nome);
        let resultConsulta: string;

        return resultConsulta;
    }
    
}
