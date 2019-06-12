/*
Crie uma classeque represente um Círculo. Esta classe deve possuir as propriedades de um ponto central 
(coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculoe do comprimento 
da circunferência. Escreva um bloco de código para testar a implementação do círculo;
*/
class Circulo{

    constructor(private x: number, private y: number, private raio: number){
        
    }

    areaCirculo(): number{
       return Math.PI * (this.raio*2);
    }
}
