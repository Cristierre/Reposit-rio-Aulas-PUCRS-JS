//import {} from 'fs';
import * as fs from 'fs'; // << Importa tudo para dentro do método

/*
try{
fs.writeFileSync('dados.txt','teste'); //função síncrona!
}catch(error){
    console.log(`Erro: ${error.name}-${error.message}`);
}
// biblioteca do Node
*/
// função assíncrona
/*
try{
    fs.writeFile('dados2.txt','mais um',(err)=>{
        if(err !== null){
            throw err;
        }
        console.log('arquivo escrito com sucesso!');
    });
    console.log('continuei a execução...');
}catch(error){
    console.log(`Erro: ${error.name}-${error.message}`);
}
*/
/*
fs.readFile('pessoa.json','utf-8',(erro, dados)=>{
    if(erro !== null){
        console.log('Erro de leitura de arquivo')
    }else{
        try{
            const obj = JSON.parse(dados);
            console.log(obj);
        }catch(erro){
            console.log('Arquivo JSON inválido!');
        }
        
    }
});
*/
/*
//Criando uma função assíncrona
//ATENÇÃO:Promise é um interface!
//quando retornado Promise é uma função Assíncrona!
async function  lerArquivoAsync(nomeArquivo: string): Promise<string>{
    return new Promise((resolve, reject)=>{
        try{
            let dados = fs.readFileSync(nomeArquivo,'utf-8');
            resolve(dados);
        }catch(erro){
            reject(erro);
        }        
    });
}
/*
//leia isso e então faça isso
lerArquivoAsync('dado.txt').then(
dados => console.log(dados),
erro => console.log(erro)
);
*/
/*
lerArquivoAsync('dado.txt').then(
    dados => console.log(dados)).catch(erro => console.log(erro.message));    
    );

*/
/*
(async ()=>{
    try{
        let dados = await lerArquivoAsync('dados.txt');
        console.log(dados);
    }
    catch(erro){
      console.log(erro.message);
    }
})();
*/



//}