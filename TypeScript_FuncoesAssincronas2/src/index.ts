import Cofrinho from './entidades/Cofrinho'
import Moeda from './entidades/Moeda' 
import {salvarCofrinho} from './persistencia/Persistencia'



let cofre = new Cofrinho();
let valor = new Moeda(0.50,'Cinquenta cents');
let valor2 = new Moeda(1,'1 real');
cofre.adicionar(valor);
cofre.adicionar(valor2);
/*
//console.log(cofre.calcularTotal());
console.log(JSON.stringify(valor));
console.log(cofre.moedasCofre);
console.log('Menor valor',cofre.menorMoeda());
console.log(cofre.frequenciaMoeda());
*/

async function chamada(){
    try{
        await salvarCofrinho(cofre, 'cofre.txt');
        
    }catch(err){
        console.log("teste", err.message)
    }
}

chamada()

