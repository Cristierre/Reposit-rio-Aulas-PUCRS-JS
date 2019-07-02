import express from 'express';

const app = express();
try{

    app.get('/',function(req, res){
        res.send('Olá mundo');
    });
    
    app.listen(3000, function(){
        console.log('Escutando a porta 3000');
    });
    
}catch(error){
    console.log(error);
}
let Pessoa = {
     nome: "Carlos Almondega",
     idade: 101
}

