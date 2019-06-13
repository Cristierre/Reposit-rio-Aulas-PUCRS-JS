import {Cofrinho} from '../entidades/Cofrinho';
import {Moeda} from '../entidades/Moeda';
import {promises} from 'fs';


export async function salvarCofrinho(cofre: Cofrinho,nomeArquivo: string){
    await promises.writeFile(nomeArquivo, JSON.stringify(cofre),'utf-8');
    console.log('Arquivo salvo, com sucesso!')
}

export async function lerCofrinho(nomeArquivo: string): Promise<string>{
     return await promises.readFile(nomeArquivo,'utf-8');
}