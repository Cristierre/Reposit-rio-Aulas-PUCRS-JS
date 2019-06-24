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
const app_1 = __importDefault(require("./app"));
const mongoose_1 = require("mongoose");
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://reqres.in";
        try {
            /*
                    //GET
                    let resposta: Response = await fetch(`${url}/api/users/`);
                    if(resposta.ok){
                        let post:Post = await resposta.json();
                        post.data.forEach(p => console.log(p));
                    }else{
                        console.log(`Erro: ${resposta.status}`);
                   }
            */
            /*
                   //POST
                   // cria um objeto literal para dar o post
                   const usuario = {
                       nome:"Cristierre Gomes Konrath",
                       email: "cristierrekonrath95@gmail.com",
                       telefone: "98760-9786"
                   }
                   let respostaPost: Response = await fetch(`${url}/api/users/2`,{
                    method: 'POST',
                    headers:{
                        "Content-Type": "aplication/json"
                    },
                    body: JSON.stringify(usuario)
                   });
                   if(respostaPost.ok){
                       let post: Post = await respostaPost.json();
                       console.log(post);
                    }else{
                       console.log(`Erro de POST: ${respostaPost.status}`);
                   }
            */
            /*
                   //DELETE
                   let respostaDelete: Response = await fetch(`${url}/api/users/2`,{
                        method: 'DELETE'
                   });
                   console.log(`${respostaDelete.status}: ${respostaDelete.statusText}`)
            */
            //Conectando ao Mongo
            debugger;
            const servidorMongoDB = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
            yield mongoose_1.connect(servidorMongoDB, { useNewUrlParser: true });
            //iniciar Express
            app_1.default.listen(app_1.default.get('port'), () => {
                console.log(`Express executando em http://localhost:${app_1.default.get('port')} no modo ${app_1.default.get('env')}`);
            });
        }
        catch (err) {
            console.log(`Erro: ${err}`);
        }
    });
}
Main();
//# sourceMappingURL=index.js.map