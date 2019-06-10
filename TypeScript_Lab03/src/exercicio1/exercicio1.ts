/*
*Crie umaclasseque represente um Círculo. Esta classe deve possuir as propriedades de um ponto central
*(coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculo e do comprimento 
*da circunferência. Escreva um bloco de código para testar a implementação do círculo.
*/ 
class Circulo{
     
    constructor(
        private coordenadaX: number,
        private coordenadaY: number,
        private raio: number){
            this.coordenadaX = coordenadaX;
            this.raio = raio;
        }
        calcArea(): number{
            return Math.PI * (this.raio**2);
        }

        calcCircunferencia(){
            return Math.PI * (this.raio*2);
        }

}

let circulo = new Circulo(13, 16, 15);

console.log(circulo.calcArea());
console.log(circulo.calcCircunferencia());

