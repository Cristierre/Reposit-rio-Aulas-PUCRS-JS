import { Autor } from "./autor";

export interface Livro{
    titulo: string,
    autor: Autor[],
    emprestado: boolean
}