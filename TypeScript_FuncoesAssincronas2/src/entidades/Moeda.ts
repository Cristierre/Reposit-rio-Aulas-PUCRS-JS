export default class Moeda{
    constructor(private _valor: number, private _nome: string){

    }
    get valor(): number{
        return this._valor;
    }
    get nome(): string{
        return this._nome;
    }
}