class ValidationError extends Error{
    constructor(mensagem:string){
        super(mensagem);
        this.name = 'ValidationError';
    }
}
function vaiDarErro(){
    throw new ValidationError('Dados inválidos');
}
try{
    vaiDarErro();
}catch(erro){
    if(erro instanceof ValidationError){

    }else{
        throw erro;
    }
}
