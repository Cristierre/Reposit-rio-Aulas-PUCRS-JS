import { Livro } from "../entidades/livro";
import {Document, Model, model, Schema, SchemaTypes} from 'mongoose';


interface LivroDocument extends Livro, Document{}

export const livroModel: Model<LivroDocument> = model('Livro',new Schema({
    titulo:{type:String, required: true},
    autor: [{type: SchemaTypes.ObjectId,required:true}],
    status: {type: Boolean}
}), 'livros');