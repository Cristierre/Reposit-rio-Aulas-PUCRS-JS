"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAlo(req, res) {
    res.send('Alô, Mundo!');
}
exports.getAlo = getAlo;
function getAloComNome(req, res) {
    res.send(`Alô, ${req.params.nome}`);
}
exports.getAloComNome = getAloComNome;
function getAloErro(req, res) {
    throw new Error('Requisição com erro!!!');
}
exports.getAloErro = getAloErro;
//# sourceMappingURL=alo.controlador.js.map