"use strict";
/*
*Crie umaclasseque represente um Círculo. Esta classe deve possuir as propriedades de um ponto central
*(coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculo e do comprimento
*da circunferência. Escreva um bloco de código para testar a implementação do círculo.
*/
class Circulo {
    constructor(coordenadaX, coordenadaY, raio) {
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
        this.raio = raio;
        this.coordenadaX = coordenadaX;
        this.raio = raio;
    }
    calcArea() {
        return Math.PI * (Math.pow(this.raio, 2));
    }
    calcCircunferencia() {
        return Math.PI * (this.raio * 2);
    }
}
let circulo = new Circulo(13, 16, 15);
console.log(circulo.calcArea());
console.log(circulo.calcCircunferencia());
//# sourceMappingURL=exercicio1.js.map