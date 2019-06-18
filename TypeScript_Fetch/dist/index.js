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
const node_fetch_1 = __importDefault(require("node-fetch"));
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        const urlBase = 'https://jsonplaceholder.typicode.com';
        try {
            /*
            //Realizar um GET
            let resposta: Response = await fetch(`${urlBase}/posts`);
            if(resposta.ok){
                let posts: Post[] = await resposta.json();
                posts.forEach(p => console.log(p.body));
            }else{
                console.log(`GET sem sucesso: ${resposta.status} ${resposta.statusText}`)
            }
            */
            /*
            //Realizar um GET
             let resposta: Response = await fetch(`${urlBase}/posts/1000`);
             if(resposta.ok){
                 
                     let posts: Post= await resposta.json();
                     console.log(posts);
            
            }else{
                console.log(`GET sem sucesso: ${resposta.status} ${resposta.statusText}`)
            }
            */
            /*
            //Realizar um POST
            // criando objeto post para serializar em JSON para o body do objeto response
            let post: Post = {
                 title:"Um Super Post",
                 body:"Um texto muito legal",
                 userId:1
            }
             let resposta: Response = await fetch(`${urlBase}/posts`,{
                 method: 'POST',
                 headers: {
                     "Content-Type":"application/json"
                 },
                 body: JSON.stringify(post)
             });
         
             if(resposta.ok){
                 let posts: Post= await resposta.json();
                 console.log(posts);
         
             }else{
                 console.log(`GET sem sucesso: ${resposta.status} ${resposta.statusText}`)
             }
         */
            //Realizar um DELETE
            let resposta = yield node_fetch_1.default(`${urlBase}/posts/1`, {
                method: "DELETE"
            });
            console.log(`GET sem sucesso: ${resposta.status} ${resposta.statusText}`);
        }
        catch (error) {
            console.log(error);
        }
    });
}
Main();
//# sourceMappingURL=index.js.map