"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cofrinho_1 = __importDefault(require("./entidades/Cofrinho"));
const Moeda_1 = __importDefault(require("./entidades/Moeda"));
const Persistencia_1 = require("./persistencia/Persistencia");
let cofre = new Cofrinho_1.default();
let valor = new Moeda_1.default(0.50, 'Cinquenta cents');
let valor2 = new Moeda_1.default(1, '1 real');
cofre.adicionar(valor);
cofre.adicionar(valor2);
/*
//console.log(cofre.calcularTotal());
console.log(JSON.stringify(valor));
console.log(cofre.moedasCofre);
console.log('Menor valor',cofre.menorMoeda());
console.log(cofre.frequenciaMoeda());
*/
function chamada() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Persistencia_1.salvarCofrinho(cofre, 'cofre.txt');
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
chamada();
//# sourceMappingURL=index.js.map