"use strict";
let mapa;
mapa = new Map();
mapa.set('RS', 'Rio Grande do Sul');
mapa.set('SC', 'Santa Catarina');
console.log(mapa.size);
console.log(mapa.get('RJ'));
//[string,string] é uma tupla
for (let entrada of mapa.values()) {
    console.log(entrada);
}
//# sourceMappingURL=index.js.map