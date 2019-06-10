"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {} from 'fs';
const fs = __importStar(require("fs")); // << Importa tudo para dentro do método
/*
try{
fs.writeFileSync('dados.txt','teste'); //função síncrona!
}catch(error){
    console.log(`Erro: ${error.name}-${error.message}`);
}
// biblioteca do Node
*/
// função assíncrona
/*
try{
    fs.writeFile('dados2.txt','mais um',(err)=>{
        if(err !== null){
            throw err;
        }
        console.log('arquivo escrito com sucesso!');
    });
    console.log('continuei a execução...');
}catch(error){
    console.log(`Erro: ${error.name}-${error.message}`);
}
*/
/*
fs.readFile('pessoa.json','utf-8',(erro, dados)=>{
    if(erro !== null){
        console.log('Erro de leitura de arquivo')
    }else{
        try{
            const obj = JSON.parse(dados);
            console.log(obj);
        }catch(erro){
            console.log('Arquivo JSON inválido!');
        }
        
    }
});
*/
//Criando uma função assíncrona
//ATENÇÃO:Promise é um interface!
//quando retornado Promise é uma função Assíncrona!
function lerArquivoAsync(nomeArquivo) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                let dados = fs.readFileSync(nomeArquivo, 'utf-8');
                resolve(dados);
            }
            catch (erro) {
                reject(erro);
            }
        });
    });
}
/*
//leia isso e então faça isso
lerArquivoAsync('dado.txt').then(
dados => console.log(dados),
erro => console.log(erro)
);
*/
/*
lerArquivoAsync('dado.txt').then(
    dados => console.log(dados)).catch(erro => console.log(erro.message));
    );

*/
(() => __awaiter(this, void 0, void 0, function* () {
    try {
        let dados = yield lerArquivoAsync('dados.txt');
        console.log(dados);
    }
    catch (erro) {
        console.log(erro.message);
    }
}))();
//# sourceMappingURL=index.js.map