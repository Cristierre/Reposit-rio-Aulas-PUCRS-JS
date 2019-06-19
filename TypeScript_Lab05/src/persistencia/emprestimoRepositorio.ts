import {EmprestimoModel} from './emprestimoModel';
import { Emprestimo } from '../entidades/emprestimo';
import { LivroModel } from './livroModel';

export class EmprestimoRepositorio{

static async cadastrarEmprestimo(emprestimo: Emprestimo){
    let novoEmprestimo = await EmprestimoModel.create(emprestimo);
    console.log("Emprestimo cadastrado com sucesso");
}
static async buscarEmprestimo(): Promise<Emprestimo[]> {
    let consulta = EmprestimoModel.find().populate('livro', LivroModel).exec();        
    return consulta;
}

}