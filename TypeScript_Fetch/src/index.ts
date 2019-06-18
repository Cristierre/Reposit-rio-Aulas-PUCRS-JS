import fetch, {Response} from 'node-fetch';
//Usando interface para tipar o retorno do json
interface Post{
    id?: number,
    userId: number,
    title: string,
    body: string
}

async function Main(){
    const urlBase = 'https://jsonplaceholder.typicode.com';
    try{
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
    let resposta: Response =  await fetch(`${urlBase}/posts/1`,{
        method: "DELETE"
    })

    console.log(`GET sem sucesso: ${resposta.status} ${resposta.statusText}`)
    }catch(error){
        console.log(error);          
    }  
}
Main();

