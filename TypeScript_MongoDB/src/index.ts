import {MongoClient, Db, Cursor} from 'mongodb';
//como retorna Promise deve ser async
async function main(){
    const url = 'mongodb://localhost:27017/teste'
    try{
        
        const cliente: MongoClient = await MongoClient.connect(url,{useNewUrlParser:true});
        console.log('Conectado com sucesso!')
       
        //Tipo Db, para gerenciamento programável da base de dados
        const banco: Db = cliente.db('teste');// criando objeto de gerenciamento de uma determinada base de dados
/*
    //inserir um documento
    const umaPessoa = {nome: 'Eduarda', idade: 32};
    const resultIns = await banco.collection('pessoas').insertOne(umaPessoa);
    console.log(`Inderido: ${resultIns.insertedId}`);
*/
    //Consultar documentos
    const cursor: Cursor = banco.collection('pessoas').find({idade:{$gt: 18}});
    
    /*
    while( await cursor.hasNext()){
        const documento = await cursor.next();
        console.log(documento.nome);
    }
    */
/*
    //Alterar documento
    //para o documento com o nome tal, execute determinada alteracao/updateOne
    const resultAlt = await banco.collection('pessoas').updateOne({nome: "teste"},{$set: {idade: 50}});
*/
    //Remover documento
    const resultRem = await banco.collection('pessoas').deleteOne({nome: 'Teste'});
   
   await cursor.forEach(doc => console.log(doc.nome));
    cliente.close();
    }catch(erro){
        console.log('Erro de acesso ao DB:');
        console.log(erro);
    }
}
main();