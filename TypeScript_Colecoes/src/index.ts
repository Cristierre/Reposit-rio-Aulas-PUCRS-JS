let mapa: Map<string,string>;
mapa = new Map();
mapa.set('RS','Rio Grande do Sul');
mapa.set('SC', 'Santa Catarina');

console.log(mapa.size);
console.log(mapa.get('RJ'));
//[string,string] é uma tupla
for(let entrada of mapa.values()){
    console.log(entrada);
}
//função sendo aplicada no map mapa
function logMapElements(value: string, key:string, map:Map<string,string>){
    console.log(`map.get('${key}')= ${value}`);
}
mapa.forEach(logMapElements);