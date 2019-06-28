import {Autor} from '../entidades/autor';
import {Document,Schema, Model, model, SchemaType, SchemaTypes} from 'mongoose';

interface AutorDocument extends Autor, Document{}

export const autorModel: Model<AutorDocument> = model('Autor', new Schema({
    nome: {type: String},
    livro: [{type: SchemaTypes.ObjectId, required:true}]
}),'autores')