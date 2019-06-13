import {Moeda} from '../entidades/Moeda';
export class Cofrinho{
    private moedas: Moeda[] = [];

    adicionar(umaMoeda: Moeda){
        this.moedas.push(umaMoeda);
    }
    calcularTotal(): number{
        const somador: (x: number, y:Moeda) => number = (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador,0);
    }
}