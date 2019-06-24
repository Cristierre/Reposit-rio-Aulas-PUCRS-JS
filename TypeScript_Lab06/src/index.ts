import { json } from "express";
import fetch,{Response} from 'node-fetch';
import app from './app';
import { connect } from "mongoose";


async function Main(){

    const url ="https://reqres.in"
    try{

       
        //Cria-se uma interface para ser armazenada no arrai Data da interface Post
        interface Usuario{
            id: number,
            email: string,
            first_name: string,
            last_name: string,
            avatar?: string
        }

        interface Post{
            page: number,
            per_page: number,
            total: number,
            total_pages: number,
            data: Usuario[]
        }
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
       debugger
       const servidorMongoDB = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
       await connect(servidorMongoDB,{useNewUrlParser: true});

       //iniciar Express
       app.listen(app.get('port'), ()=>{
           console.log(`Express executando em http://localhost:${app.get('port')} no modo ${app.get('env')}`);
       })

    }catch(err){
        console.log(`Erro: ${err}`);
        
    }

}
Main();

   
