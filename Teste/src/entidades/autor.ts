import { Livro } from "./livro";

export interface Autor{
    nome: string,
    livro: Livro[]
}