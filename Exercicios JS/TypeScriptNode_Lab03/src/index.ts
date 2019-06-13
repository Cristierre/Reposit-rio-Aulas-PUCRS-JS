/*
const PI = Math.PI;
class Circulo{
    
     constructor(
        private _coordenadaX: number,
        private _coordenadaY: number,
        private _raio: number){       
     }    
    get coordenadaX(): number{
        return this._coordenadaX;
    }  
    get coordenadaY(): number{
        return this._coordenadaY;
    }    
    get tamanhoRaio(): number{
        return this._raio;
    }
    public calculoArea(): number{
        return PI*Math.pow(this._raio,2);
    }
    public calculoComprimento(): number{
        return 2*PI*this._raio;
    }    
}

let circulo = new Circulo(6,3,6.5);

console.log("Área= ",circulo.calculoArea());
console.log("Comprimento= ",circulo.calculoComprimento());
*/
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