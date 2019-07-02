import fetch,{Response} from 'node-fetch';
import { isMainThread } from 'worker_threads';

interface Posts{
    userId: number,
    id: number,
    title: string,
    body: string
}

async function main(){

    const urlBase = 'https://jsonplaceholder.typicode.com';

    let resposta: Response = await fetch(`${urlBase}/posts`);
     if(resposta.ok){
         let posts: Posts[] = await resposta.json();
         posts.forEach(p =>{
            console.log(p.title);
         });
     }
    
    
}
main();

