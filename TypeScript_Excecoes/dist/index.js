"use strict";
class ValidationError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = 'ValidationError';
    }
}
function vaiDarErro() {
    throw new ValidationError('Dados inválidos');
}
try {
    vaiDarErro();
}
catch (erro) {
    console.log(erro.name);
    console.log(erro.menssage);
}
//# sourceMappingURL=index.js.map