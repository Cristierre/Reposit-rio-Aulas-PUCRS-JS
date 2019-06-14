"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function concectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb://localhost:27017/testemongoose';
        //Inserção
        try {
            const client = yield mongoose_1.connect(url, { useNewUrlParser: true });
            const pessoaSchema = new mongoose_1.Schema({
                nome: {
                    type: String,
                    minlength: 1,
                    maxlength: 50
                },
                idade: {
                    type: Number,
                    min: 0
                }
            });
            const pessoaModelo = mongoose_1.model('Pessoa', pessoaSchema, 'pessoas');
            let documento = new pessoaModelo({ nome: 'Jhon Doe', idade: 34 });
            let resultado = yield documento.save();
            console.log('Inserido com sucesso!');
            console.log(resultado);
            if (client && client.connection) {
                client.connection.close();
            }
        }
        catch (error) {
            console.log('Erro de inserção');
            console.log(error);
        }
    });
}
concectionDB();
//# sourceMappingURL=index.js.map