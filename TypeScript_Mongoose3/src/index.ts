import {Document,connect, Schema, model} from 'mongoose';


async function concectionDB(){
    const url = 'mongodb://localhost:27017/testemongoose';
    //Inserção
    try{
        const client = await connect(url,{useNewUrlParser: true});
    
        const pessoaSchema = new Schema({
            nome: {
                type: String,
                minlength: 1,
                maxlength: 50
            },
            idade: {
                type: Number,
                min: 0 
            }
        });
        const pessoaModelo = model('Pessoa', pessoaSchema, 'pessoas');
        let documento = new pessoaModelo({nome: 'Jhon Doe', idade:34});
        let resultado = await documento.save();
        console.log('Inserido com sucesso!') 
        console.log(resultado);
        
        if(client && client.connection){
            client.connection.close();
        }
    }catch(error){
        console.log('Erro de inserção')
        console.log(error);
    }
}

concectionDB();

