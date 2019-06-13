import {connect, Schema, Mongoose, Model, model, Query} from 'mongoose';

async function Main(){
    try{
        const url = 'mongodb://localhost:27017/testemongoose';
        const cliente = await connect(url,{useNewUrlParser: true});
        console.log('Conectado com sucesso');
        //Definir Schema e Model
        const pessoaEsquema = new Schema({
            nome: {type: String, required: true, minlength: 1, maxlength: 50},
            idade: {type: Number, required: true, min: 0}
        });
        // necessita do objeto model para fazer as operações e persistencia
        // cria documento para ser manipulado
        const pessoaModel = model('Pessoa',pessoaEsquema,'pessoas')
        /*
        //Inserir documentos
        //Instanciando objetos apartir do objeto model;
        // Mapeando um objeto js e ele representou como um Document
        const pessoaDocumento = new pessoaModel({nome: 'Helena', idade: 30});
        const documentoInserido = await pessoaDocumento.save();
        console.log(`Inserido: `);
        console.log(documentoInserido);
    */
        //Consultar documentos
        //A consulta deve ser feita usando o documento Model
        //metodo cursor para consulta permite retorno de array iterável de consulta
    /*
        //const consulta = pessoaModel.find();
        const consulta = pessoaModel.where('idade').sort('idade');
        const resultado = await consulta.exec();
        console.log(resultado);
    
   const documentoPessoa = await pessoaModel.findById('5d028f962196130e3403c896').exec();
   console.log(documentoPessoa);
   documentoPessoa!.set('idade', 23);
   console.log(documentoPessoa);
   await documentoPessoa!.save();
    */
   //Remover documento

   const documentoPessoa = await pessoaModel.findById('5d028f962196130e3403c896')
  await documentoPessoa!.remove();

        if(cliente && cliente.connection) {
            cliente.connection.close();
        }
    }catch(error){
        console.log('Erro: ');
        console.log(error);
    }
}

Main();