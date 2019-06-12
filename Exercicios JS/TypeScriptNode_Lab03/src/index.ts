/*
const PI = Math.PI;
class Circulo{
    
     private _coordenadaX: number;
     private _coordenadaY: number;
     private _raio: number; 

     constructor(){
        this._coordenadaX = 0;
        this._coordenadaY = 0;
        this._raio = 0;
     } 
      

    set coordenadaX(x:number){
        this._coordenadaX = x;
    } 
    get coordenadaX(): number{
        return this._coordenadaX;
    }
    set coordenadaY(y: number){
        this._coordenadaY = y;
    }
    get coordenadaY(): number{
        return this._coordenadaY;
    }
    set tamanhoRaio(r: number){
        this._raio = r;
    }
    get tamanhoRaio(): number{
        return this._raio;
    }
    public calculoArea(r: number): number{
        return PI*Math.pow(r,2);
    }
    public calculoComprimento(): number{
        return PI*(Math.pow(2,(this._raio*2)));
    }
    
}

let circulo = new Circulo();
circulo.coordenadaX = 5;
circulo.coordenadaY = 4;
circulo.tamanhoRaio = 3.5;

console.log(circulo.calculoArea(6.3));
console.log(circulo.calculoComprimento());

//Exercicio 2
class Moeda{
    private valor:number;
    private nome: string;
    constructor(private n:string,private v:number){
        this.valor = v;
        this.nome = n;
    }
    
    getValor():number{
        return this.valor;
    } 
    getNome(): string{
        return this.nome;
    }
}
class Cofrinho {
    moedas:Moeda [] = []; 
  //  valoresMoedas = [0.1,0.5,0.10,0.25,0.50,1]; map com valor do valor  
    constructor(){       
    }    
    adicionar(m:Moeda){
        this.moedas.push(m); 
    }
    calcularTotal():number{
        let s: number = 0;
        for(let soma of this.moedas ){
            s += soma.getValor();
        }   
        return s; 
    }
    menorValor(): number{
        let menorValor: number = 1;
        for(let menor of this.moedas){
            if(menor.getValor() < menorValor ){
                menorValor = menor.getValor();
            }
        }
        return menorValor;
    }
    menorValorInstancia(): Moeda{
        let menorValor: Moeda = this.moedas[0];
        for(let menor of this.moedas){
            if(menor.getValor() < menorValor.getValor() ){
                menorValor = menor;
            }
        }
        return menorValor;
    }

     frequencia(): Map<string, number>{
        let mapa = new Map();
        this.moedas.map(num => {
            let cont = 0;
            for (let i = 0; i < this.moedas.length; i++) {
                if (num.getValor() === this.moedas[i].getValor()) {
                    cont++;
                }                
            }
            mapa.set(num.getNome(), cont);// atribuição chave valor
        });
        return mapa;
    }
}
let moeda1 = new Moeda("25 centavos", 0.25);
let moeda2 = new Moeda("25 centavos", 0.25);
let moeda3 = new Moeda("25 centavos", 0.25);
let cofre = new Cofrinho();
cofre.adicionar(moeda1);
cofre.adicionar(moeda2);
cofre.adicionar(moeda3);
cofre.adicionar(new Moeda("25 centavos", 0.25));
cofre.adicionar(new Moeda("25 centavos", 0.25));
cofre.adicionar(new Moeda("1 Real", 1));
console.log(cofre.calcularTotal());
console.log(cofre.menorValor());

console.log(JSON.stringify(moeda1));
console.log(moeda1);
console.log("Menor valor instancia: ", cofre.menorValorInstancia());
console.log("frequencia",cofre.frequencia());

*/
//Exercício 2 refactor
/*
class Moeda{
    constructor(private _valor: number, private _nome: string){

    }
    get valor(): number{
        return this._valor;
    }
    get nome(): string{
        return this._nome;
    }
}

class Cofrinho{
    private mapa: Moeda[] = [];
    constructor(){

    }
    adicionar(moeda: Moeda){
        this.mapa.push(moeda);
    }
    calcularTotal(): number{
        let total: number = 0;
        for(let moedas of this.mapa){
            total += moedas.valor;
        }
        return total;
    }

    menorMoeda(): Moeda{
        let menor = this.mapa[0];
        for(let valores of this.mapa){
            if(valores < menor){
                menor = valores;
            }
        }
        return menor;
    }
    get moedasCofre(): Moeda[]{
        return this.mapa;
    }
    frequenciaMoeda(): Map<string, number>{
        let iterador = new Map<string, number>();
        let moedasCofre: Moeda[] = this.moedasCofre;
        this.mapa.map(function(m){
            let contador: number = 0;
            for(let i = 0; i< moedasCofre.length; i++){
                if(moedasCofre[i].valor === m.valor){
                    contador++;
                }
             }
             iterador.set(m.nome,contador);       
        });
        
        return iterador; 
    
    }
}

let cofre = new Cofrinho();
let valor = new Moeda(0.50,'Cinquenta cents');
let valor2 = new Moeda(1,'1 real');
cofre.adicionar(valor);
cofre.adicionar(valor2);

//console.log(cofre.calcularTotal());
console.log(JSON.stringify(valor));
console.log(cofre.moedasCofre);
console.log('Menor valor',cofre.menorMoeda());
console.log(cofre.frequenciaMoeda());
*/

/*
abstract class Cliente{
    private nome: string;
    constructor(umNome: string){
        this.nome = umNome;
    }
    getNome(): string{
        return this.nome;
    }
    abstract getMensalidade(): number;

}

class ClienteFisico extends Cliente{
    private idade: number;
    private salario: number;
    constructor(umNome:string, umaIdade: number = 0, umSalario: number = 0){
        super(umNome);
        this.idade = umaIdade;
        this.salario = umSalario;
    }
    setSalario(_umSalario: number){
        this.salario = _umSalario;
    }
    setIdade(_umaIdade: number){
        this.idade = _umaIdade;
    }
    getSalario(): number{
        return this.salario;
    }
    getIdade(): number{
        return this.idade;
    } 
    getMensalidade(): number{
        let valorMensalidade:number = 0;
        if(this.idade < 60){
            valorMensalidade = (this.salario*0.9)
        }else{
            valorMensalidade = (this.salario*0.85)
        } 
        return valorMensalidade ;
    }   
}

class ClienteJuridico extends Cliente {
    
    private mensalidade: number;
    constructor(umNome: string, umaMensalidade:number = 0){
        super(umNome);
        this.mensalidade = umaMensalidade;
    }
    setMensalidade(umaMensalidade: number){
        this.mensalidade = umaMensalidade;
    }

    getMensalidade(): number{
        return 0;
    }
    
}
*/