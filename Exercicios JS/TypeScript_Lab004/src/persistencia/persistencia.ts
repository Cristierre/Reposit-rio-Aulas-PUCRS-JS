import {Cofrinho} from '../entidades/Cofrinho';
import {Moeda} from '../entidades/Moeda';
import {promises, fstat} from 'fs';
import { resolve } from 'dns';
import { rejects } from 'assert';

export async function salvarCofrinho(cofrinho: Cofrinho, nomeArq: string){
         await promises.writeFile(nomeArq,JSON.stringify(cofrinho),'utf-8');
    
}
export async function lerCofrinho(nomeArq: string): Promise<string>{
    return await new Promise((resolve, reject)=>{
       promises.readFile(nomeArq).toString();
         console.log('passou')
    });
   
     
    
}


