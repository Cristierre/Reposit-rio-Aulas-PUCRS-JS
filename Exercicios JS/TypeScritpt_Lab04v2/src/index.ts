import {lerCofrinho,salvarCofrinho} from './persistencia/persistencia';
import * as fs from 'fs';
import { Cofrinho } from './entidades/Cofrinho';
import { Moeda } from './entidades/Moeda';

async function lerDoBanco(){
    try{
       const leitura = await lerCofrinho('backupDia13Do6.txt');
       console.log(leitura);
       return leitura;
    }catch(erro){
        console.log('Não foi possível executar a leitura!')
    }
}
const moeda1 = new Moeda(0.05,'Cinco centavos');
const moeda2 = new Moeda(1,'Um real');
const moeda3 = new Moeda(0.25,'Vinte e cinco centavos');
const moeda4 = new Moeda(0.5,'Cinquenta centavos');
const moeda5 = new Moeda(0.1,'Dez centavos');
const moeda6 = new Moeda(0.5,'Cinquenta centavos');

const cofre = new Cofrinho();
cofre.adicionar(moeda1);
cofre.adicionar(moeda2);
cofre.adicionar(moeda3);
cofre.adicionar(moeda4);
cofre.adicionar(moeda5);
cofre.adicionar(moeda6);


//salvarCofrinho(cofre,'backupDia13do6.txt');
console.log(lerDoBanco());