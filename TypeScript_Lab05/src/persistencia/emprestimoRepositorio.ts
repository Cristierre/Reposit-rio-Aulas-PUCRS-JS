import {EmprestimoModel} from './emprestimoModel';
import { Emprestimo } from '../entidades/emprestimo';

export class EmprestimoRepositorio{

static async cadastrarEmprestimo(emprestimo: Emprestimo){
    let novoEmprestimo = await EmprestimoModel.create(emprestimo);
    console.log("Emprestimo cadastrado com sucesso");
}

}