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
    static async buscarPorUltimoNome(): Promise<Autor[]>{
        let consultaUltimoNome = AutorModel.find();
        return consultaUltimoNome.exec();
    }
    static async alterarRegistro(id: string, nomeAlt:string, ultimoNomeAlt: string):Promise<void>{
        await AutorModel.updateOne({_id: id} ,{primeiro_nome : nomeAlt, ultimo_nome : ultimoNomeAlt});
        console.log('Alterado com sucesso!')
    }   
}
