import {Cofrinho} from './entidades/Cofrinho';
import {Moeda} from './entidades/Moeda';
import {salvarCofrinho, lerCofrinho} from './persistencia/persistencia';

async function executarSalvarArquivo(){
    try{
        let escrita = await salvarCofrinho(cofre,'texto.txt')
        console.log('Salvo!')
    }catch(erro){
        console.log('Falha!')
    }
    
    
}
async function executarLerCofrinho(){
    try{
        const res = await lerCofrinho('texto.txt');  
        console.log("try: " , res)    
    }catch(erro){
        console.log('Falha!')
    }
    
    
}

let cofre = new Cofrinho();
let moeda1 = new Moeda(0.5,'Cinquenta centavos');
let moeda2 = new Moeda(0.1,'Um centavo');
let moeda3 = new Moeda(1,'Um real');

cofre.adicionar(moeda1);
cofre.adicionar(moeda2);
cofre.adicionar(moeda3);

//executarSalvarArquivo();
console.log(executarLerCofrinho());