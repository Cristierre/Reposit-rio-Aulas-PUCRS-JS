import Moeda from './Moeda'
export default class Cofrinho{
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