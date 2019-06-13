import {Document, Schema, model, Model, connect} from 'mongoose';

interface Pessoa{

    nome: String,
    idade: number
}

interface PessoaDocument extends Pessoa, Document{}

const PessoaSchema = new Schema({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    idade: {type: Number, required: true, min: 0}
});
//Tipando o objeto model
const pessoaModel: Model<PessoaDocument> = model('Pessoa', PessoaSchema, 'pessoas');

async function Main(){
    try{
    const url = 'mongodb://localhost:27017/testemongoose';
    const cliente = await connect(url,{useNewUrlParser: true});
    console.log('Conectado com sucesso');
    /*
    //Pode ser criado instanciando o objeto que implementasse Pessoa 
    const documento = await pessoaModel.create({nome:'Novo', idade: 10});
    console.log(documento);
    documento.idade = 45
    console.log(documento);
    */
   //Consulta documento
   //Permite agora consultar com find pois o model está tipado
   const consulta = pessoaModel.find();
   const resultado = await consulta.exec();  
   resultado.forEach(p => console.log(p.nome));

    cliente.connection.close();
    }catch(error){
        console.log('Erro: ');
        console.log(error);
    }
}
Main();