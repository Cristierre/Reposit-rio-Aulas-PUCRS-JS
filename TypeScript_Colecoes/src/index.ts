import { stringify } from "querystring";

let mapa: Map<string,string>;
mapa = new Map();
mapa.set('RS','Rio Grande do Sul');
mapa.set('SC', 'Santa Catarina');

console.log(mapa.size);
console.log(mapa.get('RJ'));
//[string,string] é uma tupla
for(let entrada of mapa.values()){
    console.log(entrada);
}
//função sendo aplicada no map mapa
function logMapElements(value: string, key:string, map:Map<string,string>){
    console.log(`map.get('${key}')= ${value}`);
}
mapa.forEach(logMapElements);

//Exercicio 6
function getMax(array: number[]): number{
    let maior = array[0];
    for(let valor of array){
        if(valor>maior){
            maior = valor;
        }
    }
    return maior;
}
console.log(getMax([1,2,4,2,0]));
console.log(getMax([0]));
console.log(getMax([]));
//console.log(getMax([null]));
//console.log(getMax([undefined]));

//Exercicio 7
function toMax(array: number[]): Map<number,number>{
     let mapa:Map<number, number> = new Map();
    array.map(num =>{
        let cont: number = 0;
        for(let i = 0; i < array.length; i++){
            if(num === array[i]){
                cont++;
            }           
        }
        mapa.set(num, cont);        
    })
    return mapa;
}
console.log(toMax([3,4,5,6,7,7,7,8,8,8,9,9]));

//Exercicio 7 professor
function frequencia(array: number[]): Map<number, number>{
    let contagem = new Map<number, number>();
    for(let valor of array){
        if(contagem.has(valor)){
            contagem.set(valor, (contagem.get(valor)||0)+1);            
            // ! Remove os tipos null e undefined
            //contagem.set(valor, contagem.get(valor)!+1);
        }else{
            contagem.set(valor,1);
        }
    }
    return contagem;
}
console.log(frequencia([3,4,5,6,7,7,7,8,8,8,9,9]));

//Exercicio 7 professor V2
function frequenciaV2(array: number[]): Map<number, number>{
    return array.reduce((contagem, valor) => 
    contagem.set(valor, (contagem.get(valor)||0)+1),
     new Map<number, number>());  
}
console.log(frequenciaV2([2,3,4,4,5,5,5,6,6,6]));
