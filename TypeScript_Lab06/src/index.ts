

async function Main(){

    const url ="https://reqres.in"
    try{

        let resposta: Response = await fetch(`${url}/api/users?page=2`);
        
        interface Post{
            name: string,
            email: string,
            phone: string
        }
    
        if(resposta.ok){
          
            let usuario:Usuario[] = await resposta.json;
            usuario.forEach(user => console.log(user.body));
            
        }else{
            console.log(`Erro: ${resposta.status}`);
        }
    }catch(err){
        console.log(`Erro: ${err}`);
    }

}

   
