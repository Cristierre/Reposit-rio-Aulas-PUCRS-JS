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
const mongodb_1 = require("mongodb");
//como retorna Promise deve ser async
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb://localhost:27017/teste';
        try {
            const cliente = yield mongodb_1.MongoClient.connect(url, { useNewUrlParser: true });
            console.log('Conectado com sucesso!');
            //Tipo Db, para gerenciamento programável da base de dados
            const banco = cliente.db('teste'); // criando objeto de gerenciamento de uma determinada base de dados
            /*
                //inserir um documento
                const umaPessoa = {nome: 'Eduarda', idade: 32};
                const resultIns = await banco.collection('pessoas').insertOne(umaPessoa);
                console.log(`Inderido: ${resultIns.insertedId}`);
            */
            //Consultar documentos
            const cursor = banco.collection('pessoas').find({ idade: { $gt: 18 } });
            /*
            while( await cursor.hasNext()){
                const documento = await cursor.next();
                console.log(documento.nome);
            }
            */
            /*
                //Alterar documento
                //para o documento com o nome tal, execute determinada alteracao/updateOne
                const resultAlt = await banco.collection('pessoas').updateOne({nome: "teste"},{$set: {idade: 50}});
            */
            //Remover documento
            const resultRem = yield banco.collection('pessoas').deleteOne({ nome: 'Teste' });
            yield cursor.forEach(doc => console.log(doc.nome));
            cliente.close();
        }
        catch (erro) {
            console.log('Erro de acesso ao DB:');
            console.log(erro);
        }
    });
}
main();
//# sourceMappingURL=index.js.map