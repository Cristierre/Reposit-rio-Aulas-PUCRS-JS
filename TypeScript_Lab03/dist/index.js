"use strict";
class Moeda {
    constructor(_valor, _nome) {
        this._valor = _valor;
        this._nome = _nome;
    }
    get valor() {
        return this._valor;
    }
    get nome() {
        return this._nome;
    }
}
class Cofrinho {
    constructor() {
        this.moedas = [];
    }
    adicionar(umaMoeda) {
        this.moedas.push(umaMoeda);
    }
    calcularTotal() {
        const somador = (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }
}
let cofre = new Cofrinho();
cofre.adicionar(new Moeda(1.0, '1 real'));
cofre.adicionar(new Moeda(0.5, '50 centavos'));
cofre.adicionar(new Moeda(0.1, '10 centavos'));
console.log(cofre.calcularTotal());
let cofre2 = new Cofrinho();
console.log(cofre2.calcularTotal());
//# sourceMappingURL=index.js.map