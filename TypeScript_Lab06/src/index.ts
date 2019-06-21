

async function Main(){

    const url ="https://reqres.in"
    try{
        interface Post{
            name: string,
            email: string,
            phone: string
        }

        let resposta: Response = await fetch(`${url}/api/users?page=2`);    
        if(resposta.ok){         
            let usuario:Post = await resposta.json;
            usuario.forEach(user => console.log(user.body));
            
        }else{
            console.log(`Erro: ${resposta.status}`);
        }
    }catch(err){
        console.log(`Erro: ${err}`);
    }

}

   
