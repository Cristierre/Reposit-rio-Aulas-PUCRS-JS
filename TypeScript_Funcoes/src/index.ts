function area(r: number): number{
    return Math.PI * r**2;
}

function circunferencia(r: number) {
    return Math.PI * 2 * r;
}

console.log(area(4.5));
console.log(circunferencia(4.5));

// ... concatenará todos os parâmetros passados posteriormente separando com " "
function buildName(firstName: string, ...restOfName: string[]){
    return firstName + " "+restOfName.join(" ");
}
console.log("João", "Almeida", "Jordão");
//função anônima usada também para evocar função
const somar = function(x:number, y:number): number{
    return x+y;
}

console.log(somar(2,1));
// Se o corpo da função for apenas o retorno da mesma, pode ser usado expressão
//lambda para o return
const mult = (x: number, y: number) => x*y;

console.log(mult(2,4));
// função que retorna função
//(   )=> retorno, notação de tipos para funções
function multiplicador(fator: number): (n: number) => number{
    return numero => numero * fator;
}

//console.log(multiplicador(3)); /retorna a [funcao]

//Passa o parâmetro para ambas as funções
console.log(multiplicador(3)(4));
