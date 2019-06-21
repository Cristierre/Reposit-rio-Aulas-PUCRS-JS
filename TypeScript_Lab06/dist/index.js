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
            //POST
            const usuario = {
                nome: "Cristierre Gomes Konrath",
                email: "cristierrekonrath95@gmail.com",
                telefone: "98760-9786"
            };
            let respostaPost = yield node_fetch_1.default(`${url}/api/users/2`, {
                method: 'POST',
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify(usuario)
            });
            if (respostaPost.ok) {
                let post = yield respostaPost.json();
                console.log(post);
            }
            else {
                console.log(`Erro de POST: ${respostaPost.status}`);
            }
        }
        catch (err) {
            console.log(`Erro: ${err}`);
        }
    });
}
Main();
//# sourceMappingURL=index.js.map