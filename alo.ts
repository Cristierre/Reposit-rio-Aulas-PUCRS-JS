let umaPessoa: string;

umaPessoa = 'Jhon Doe';
let hoje = new Date();
/*
document.body.innerHTML = `Alo, ${umaPessoa}! Hoje é ${hoje.toDateString()}`;
*/
document.body.innerHTML = alo(umaPessoa);
function alo(nome: string): string {
    return 'Alô, '+nome;
}