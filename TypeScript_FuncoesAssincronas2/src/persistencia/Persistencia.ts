import Cofrinho from "../entidades/Cofrinho";
import Moeda from "../entidades/Moeda";
import * as  fs from 'fs';
import {promises} from 'fs';
import { resolve } from "dns";
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