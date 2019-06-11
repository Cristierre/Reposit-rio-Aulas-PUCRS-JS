import Cofrinho from "../entidades/Cofrinho";
import Moeda from "../entidades/Moeda";
import * as  fs from 'fs';
  
    const fsPromisses = fs.promises;
    console.log(fs) 

   export async function salvarCofrinho(cofrinho: Cofrinho, nomeArquivo:string){
        return new Promise((resolve, reject) => {
           try{
            resolve(fsPromisses.writeFile(nomeArquivo,JSON.stringify(cofrinho)));
            console.log("Salvo!")
           }catch(err){
                console.log(err.message);
                reject(err.message);
            }
        })
    }

    //lerCofrinho(nomeArquivo: string){

    


//}