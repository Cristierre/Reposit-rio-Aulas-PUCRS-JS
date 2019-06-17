import {Emprestimo} from '../entidades/emprestimo';
import {EmprestimoModel} from '../persistencia/emprestimoModel';

export class EmprestimoRepositorio {
     async criar(emprestimo: Emprestimo): Promise<Emprestimo> {
     let novoEmprestimo = await EmprestimoModel.create(emprestimo);
     return novoEmprestimo;
    }
}