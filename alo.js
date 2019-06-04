var umaPessoa;
umaPessoa = 'Jhon Doe';
var hoje = new Date();
/*
document.body.innerHTML = `Alo, ${umaPessoa}! Hoje é ${hoje.toDateString()}`;
*/
document.body.innerHTML = alo(umaPessoa);
function alo(nome) {
    return 'Alô, ' + nome;
}
