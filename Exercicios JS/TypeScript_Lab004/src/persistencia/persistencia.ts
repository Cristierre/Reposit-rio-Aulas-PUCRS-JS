import {Cofrinho} from '../entidades/Cofrinho';
import {Moeda} from '../entidades/Moeda';
import {promises, fstat} from 'fs';
import { resolve } from 'dns';
import { rejects } from 'assert';

export async function salvarCofrinho(cofrinho: Cofrinho, nomeArq: string){
         await promises.writeFile(nomeArq,JSON.stringify(cofrinho),'utf-8');
    
}
export async function lerCofrinho(nomeArq: string): Promise<Cofrinho>{
      
     const dado = await promises.readFile(nomeArq, 'utf-8');
     try{
       const cofre = new Cofrinho();
        const conversao = JSON.parse(dado)
        for(let i = 0; i< conversao.moedas.length; i++){
          let moeda = new Moeda(conversao.moedas[i]._valor, conversao.moedas[i]._nome);
          cofre.adicionar(moeda);
        }
        console.log('um cofre: ', cofre)
        return cofre;
     }catch(erro){
       throw erro.message;
     }
     
   
     
    
}


