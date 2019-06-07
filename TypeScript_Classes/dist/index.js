"use strict";
class Pessoa {
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
}
/*
let p1: Pessoa;
p1 = new Pessoa('Jhon Doe', 56);
console.log(p1);

class PessoaV2{
    readonly nome: string;
    readonly idade: number;

    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }
}

let p2: PessoaV2;
p2 = new PessoaV2('Jhon Doe', 22);
console.log(p2.idade);

class PessoaV3{
    
    constructor(private nome: string, private _idade: number){
        
    }
    toString(): string{
        return `[nome = ${this.nome} idade= ${this._idade}]`
    }

    getNome(): string{
        return this.nome;
    }
    get idade():number{
        return this._idade;
    }

    set idade(n:number){
        this._idade = n;
    }
}
let p3 = new PessoaV3('Jhon Doe',22);
console.log(p3);
console.log(p3.getNome());
console.log(p3.idade);
p3.idade = 30;
console.log(p3.idade);
console.log(p3.toString());

//TypeScript tem "tipos estruturais"
let umaPessoa: Pessoa = new Pessoa('Jhon Doe', 22);
let outraPessoa: PessoaV2 = umaPessoa;
console.log(outraPessoa);
//verificação não é pelo nome nem por instancia, diz respeito a estrutura do objeto

function  imprime(p:{nome: string, idade:number}): void{
    
}

class Produto{
    constructor(private _nome: string, private _preco:number){

    }
    get nome(): string{
        return this._nome;
    }
    get preco():number{
        return this._preco;
    }
    set preco(p:number){
        this._preco = p;
    }
    toString(){
        return `nome = ${this._nome} preco = ${this._preco}`;
    }
}

class ProdutoPerecivel extends Produto{

    constructor(nome:string, preco:number, private _dataValidade:Date){
        super(nome,preco);
    }
    get dataValidade():string{
        return this._dataValidade.toLocaleDateString();
    }
    toString():string{
        return super.toString()+`[dataValidade = ${this._dataValidade}]`;
    }
}
    let prod1 = new Produto('prod1',1.99);
    console.log(prod1);
    let prod2 = new ProdutoPerecivel('prod2', 100, new Date(2019,11,31));
    console.log(prod2.toString());
    //comparação de objetos é por sua estrutura!

   // let prod3:Produto = {_nome:'teste', _preco:2.50};
*/
/*
abstract class FiguraBidimensional{
    constructor(private _centrox: number, private _centroy:number){

    }
    get x(): number {
        return this._centrox;
    }
    get y():number{
        return this._centroy;
    }
    abstract area():number;
   }

   class Circulo extends FiguraBidimensional{
       constructor(centrox:number, centroy:number,private _raio:number){
           super(centrox, centroy);
       }
        area():number{
           return Math.PI * this._raio **2;
       }
       get raio():number{
           return this._raio;
       }
   }
   let fig1: FiguraBidimensional = new Circulo(1,1,3);
   console.log(fig1);
   console.log(fig1.area());
   console.log(fig1.x);
   console.log((<Circulo>fig1).raio);

   let pessoa = {
       nome: 'Jhon Doe',
       idade : 22
   };

   let{nome, idade} = pessoa;
   console.log(nome);
   console.log(idade);
   let{x,y} = fig1;
   console.log(x);
   console.log(y);

interface Desenhavel{
    x:number;
    y:number;
}
//Controlar comportamento de objetos de maneira mais abtrata possível, levando em conta é a estrutura!
function desenhar(d:Desenhavel){
    console.log(`x=${d.x} y=${d.y}`);
}
desenhar(fig1);
*/
//Usando função para moificar funções
/*
interface Predicado<T> {
    (item: T): boolean;
}

function filtrar<T>(array:T[], filtro:Predicado<T>): T[]{
    let resultado:T[] = [];
    for(let i = 0; i<array.length; i++){
        if(filtro(array[i])){
            resultado.push(array[i]);
        }
    }
    return resultado
}
*/
let umaPessoa = new Pessoa('Jhon Doe', 22);
let json = JSON.stringify(umaPessoa);
console.log(json);
let jsonstring = '{"nome": "Jhon Doe","Idade":22}';
let obj = JSON.parse(jsonstring);
console.log(obj);
//# sourceMappingURL=index.js.map