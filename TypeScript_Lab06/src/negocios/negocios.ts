import { LivroRepositorio } from "../persistencia/livroRepositorio";
import { EmprestimoRepositorio } from "../persistencia/emprestimoRepositorio";
import { Emprestimo } from "../entidades/emprestimo";
import { EmprestimoModel } from "../persistencia/emprestimoModel";
import { LivroModel } from "../persistencia/livroModel";

export async function buscarDetalhadaLivros(){
    console.log("Buscando todos os livros da coleção")
       let buscarLivro = await LivroRepositorio.buscar();
       let emprestimos = await EmprestimoRepositorio.buscarEmprestimo();
       buscarLivro.forEach(l => {
        console.log(l)
            emprestimos.forEach(element => {
                console.log(l.titulo)
                if(l.status === false && element.livro.titulo === l.titulo){
                    console.log(`Livro "${l.titulo}" indisponível no momento, data de devolução: ${element.dataEntrega}`)                   
               }});
           });
}
export async function emprestimoSeteDias(idLivro: string){
    let livroEmp = await LivroRepositorio.buscarLivroPorId(idLivro);
    let emprestimo: Emprestimo;
       if(livroEmp.status === true){
            emprestimo = {
               livro: livroEmp,
               dataRetirada: new Date(Date.now()),
               dataEntrega: new Date(Date.now() + 7*24*60*60*1000)               
           }
           await LivroRepositorio.modificadorStatusLivro(idLivro, false);
            let cadastroEmprestimo = await EmprestimoRepositorio.cadastrarEmprestimo(emprestimo);
            console.log(cadastroEmprestimo);
        }else{
    console.log('Livro indisponível no momento!')
        }
}
export async function devolucaoLivro( id: string): Promise <string> {
    const diffData = (entrega: Date, estimativa: Date): number => {
        const diffDate = entrega.getTime() - estimativa.getTime();
        let day = Math.trunc(((diffDate % 31536000000) % 2628000000) / 86400000)
        return day;
    }
    
    await LivroRepositorio.modificadorStatusLivro(id);

    const emprestimo = await EmprestimoRepositorio.buscarEmprestimo();
    const dataEnt = new Date (Date.now());    
    const livroAchado = await LivroRepositorio.buscarLivroPorId(id)
    let dataRet: Date = new Date(Date.now());
    
    emprestimo.forEach(e => {
        if(e.livro.titulo === livroAchado.titulo) {
            dataRet = e.dataEntrega
        } 
    })

    if(!dataRet) console.log('Sem data')
    console.log(dataRet)

    let dias = diffData(dataEnt, dataRet )

    if(dias > 0) {
        dias = dias * 2.5
        return `Atraso no valor de R$${dias}`
    } else return "Livro devolvido"; 
}