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
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = 'mongodb://localhost:27017/testemongoose';
            const cliente = yield mongoose_1.connect(url, { useNewUrlParser: true });
            console.log('Conectado com sucesso');
            //Definir Schema e Model
            const pessoaEsquema = new mongoose_1.Schema({
                nome: { type: String, required: true, minlength: 1, maxlength: 50 },
                idade: { type: Number, required: true, min: 0 }
            });
            // necessita do objeto model para fazer as operações e persistencia
            // cria documento para ser manipulado
            const pessoaModel = mongoose_1.model('Pessoa', pessoaEsquema, 'pessoas');
            /*
            //Inserir documentos
            //Instanciando objetos apartir do objeto model;
            // Mapeando um objeto js e ele representou como um Document
            const pessoaDocumento = new pessoaModel({nome: 'Helena', idade: 30});
            const documentoInserido = await pessoaDocumento.save();
            console.log(`Inserido: `);
            console.log(documentoInserido);
        */
            //Consultar documentos
            //A consulta deve ser feita usando o documento Model
            //metodo cursor para consulta permite retorno de array iterável de consulta
            /*
                //const consulta = pessoaModel.find();
                const consulta = pessoaModel.where('idade').sort('idade');
                const resultado = await consulta.exec();
                console.log(resultado);
            
           const documentoPessoa = await pessoaModel.findById('5d028f962196130e3403c896').exec();
           console.log(documentoPessoa);
           documentoPessoa!.set('idade', 23);
           console.log(documentoPessoa);
           await documentoPessoa!.save();
            */
            //Remover documento
            const documentoPessoa = yield pessoaModel.findById('5d028f962196130e3403c896');
            yield documentoPessoa.remove();
            if (cliente && cliente.connection) {
                cliente.connection.close();
            }
        }
        catch (error) {
            console.log('Erro: ');
            console.log(error);
        }
    });
}
Main();
//# sourceMappingURL=index.js.map