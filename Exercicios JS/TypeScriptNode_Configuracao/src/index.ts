let saudacao: string = 'Alô, mundo!';
console.log(saudacao);
console.log("Alteração")

//Exercicio3
function min(x: number ,y: number ): number{
    if(x<y){
        return x;
    }else{
        return y;
    }
}
console.log(min(1,5));

//Exercicio 4
function pow(x: number, y: number = 0): number{
    let cont: number = 1;
    let resultado: number = 1;
    while(cont <= y){        
        resultado *= x;
        cont++;
    }
    return resultado;
}
console.log(pow(4,2));

//Exercicio 5
function toMaiusculaPrimeiras(s: string): string{
    return s.replace(s.charAt(0),s.charAt(0).toUpperCase());
}
    console.log(toMaiusculaPrimeiras("cristierre"));
//Exercicio 6
function getMax(arr: number[] ): number{
    let maior: number = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i];
        }       
    }
    return maior;
}
console.log(getMax([3,56,5,6,7]));

//Exercicio 7
function frequenciaValor(valor:number[]){
    let mapa: Map<number, number> = new Map();

    valor.map(function (num){
        let cont: number = 0;
        for(let i = 0; i<valor.length; i++){          
            if(num === valor[i]){            
            cont++;            
            
        }
        mapa.set(num,cont);
    }    
    })
    return mapa; 
    }
    console.log(frequenciaValor([2,4,5,6,6]));
 




