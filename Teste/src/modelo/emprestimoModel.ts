import {Emprestimo} from  '../entidades/emprestimo';
import {Document, Schema, Model, model, SchemaTypes} from 'mongoose';

interface EmprestimoDocument extends Emprestimo, Document{}

export const emprestimoModel: Model<EmprestimoDocument> = model('Emprestimo', new Schema({
    livro: {type: SchemaTypes.ObjectId, required: true},
    dataRetirada: {type: Date, default: Date.now()},
    dataEntrega: {type: Date, required: true}
}), 'emprestimo');