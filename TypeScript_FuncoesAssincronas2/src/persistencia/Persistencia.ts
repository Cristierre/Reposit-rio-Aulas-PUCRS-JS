import Cofrinho from "../entidades/Cofrinho";
import Moeda from "../entidades/Moeda";
import * as  fs from 'fs';
import {promises} from 'fs';
import { resolve, CONNREFUSED } from "dns";
import { rejects } from "assert";
  
    const fsPromises = promises;
    console.log(fs) 
    console.log(fsPromises)

   export async function salvarCofrinho(cofrinho: Cofrinho, nomeArquivo:string){
        return new Promise((resolve, reject) => {
           try{
            resolve(fsPromises.writeFile(nomeArquivo,JSON.stringify(cofrinho)));
            console.log("Salvo!")
           }catch(err){
                console.log(err.message);
                reject(err.message);
            }
        })
    }

   export async function lerCofrinho(nomeArquivo: string): Promise<string>{
        return await new Promise((resolve, reject)=>{
            try{
                resolve(fs.readFileSync(nomeArquivo, 'utf8'));
            }catch(err){
                reject(console.log(err.message));
            }
        })


    }

    export async function lerCofreAsync(nomeArq:string): Programa<Cofrinho>{
        const dados =  await promises.readFile(nomeArq,'utf-8');
        try{
            const obj = JSON.parse(dados);
            const cofre = new Cofrinho();
            for(let i = 0; i< obj._moedas.length; i++){
                CONNREFUSED.adicionar(new Moeda(obj.data[i]._valor))
            }
        }
    }