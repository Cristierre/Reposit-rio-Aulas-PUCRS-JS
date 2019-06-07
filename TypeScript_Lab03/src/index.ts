class Moeda{
    constructor(private _valor: number, private _nome: string){
    }
    get valor():number{
        return this._valor;
    }
    get nome(): string{
        return this._nome;
    }
}

class Cofrinho{
    private moedas: Moeda[] = [];

    adicionar(umaMoeda: Moeda){
        this.moedas.push(umaMoeda);
    }
    calcularTotal(): number{
        const somador: (x: number, y:Moeda) => number = (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador,0);
    }
}

let cofre: Cofrinho = new Cofrinho();
cofre.adicionar(new Moeda(1.0,'1 real'));
cofre.adicionar(new Moeda(0.5,'50 centavos'));
cofre.adicionar(new Moeda(0.1,'10 centavos'));
console.log(cofre.calcularTotal());
let cofre2: Cofrinho = new Cofrinho();
console.log(cofre2.calcularTotal());