"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cofrinho {
    constructor() {
        this.mapa = [];
    }
    adicionar(moeda) {
        this.mapa.push(moeda);
    }
    calcularTotal() {
        let total = 0;
        for (let moedas of this.mapa) {
            total += moedas.valor;
        }
        return total;
    }
    menorMoeda() {
        let menor = this.mapa[0];
        for (let valores of this.mapa) {
            if (valores < menor) {
                menor = valores;
            }
        }
        return menor;
    }
    get moedasCofre() {
        return this.mapa;
    }
    frequenciaMoeda() {
        let iterador = new Map();
        let moedasCofre = this.moedasCofre;
        this.mapa.map(function (m) {
            let contador = 0;
            for (let i = 0; i < moedasCofre.length; i++) {
                if (moedasCofre[i].valor === m.valor) {
                    contador++;
                }
            }
            iterador.set(m.nome, contador);
        });
        return iterador;
    }
}
exports.default = Cofrinho;
//# sourceMappingURL=Cofrinho.js.map