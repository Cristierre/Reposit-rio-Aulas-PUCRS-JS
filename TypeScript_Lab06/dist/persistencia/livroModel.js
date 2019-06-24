"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.LivroModel = mongoose_1.model('Livro', new mongoose_1.Schema({
    titulo: { type: String, required: false },
    autores: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: 'Autor' }],
    status: { type: Boolean, required: true }
}), 'livros');
//# sourceMappingURL=livroModel.js.map