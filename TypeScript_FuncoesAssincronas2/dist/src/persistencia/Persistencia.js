"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const fs_1 = require("fs");
const fsPromises = fs_1.promises;
console.log(fs);
console.log(fsPromises);
function salvarCofrinho(cofrinho, nomeArquivo) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                resolve(fsPromises.writeFile(nomeArquivo, JSON.stringify(cofrinho)));
                console.log("Salvo!");
            }
            catch (err) {
                console.log(err.message);
                reject(err.message);
            }
        });
    });
}
exports.salvarCofrinho = salvarCofrinho;
function lerCofrinho(nomeArquivo) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            try {
                resolve(fs.readFileSync(nomeArquivo, 'utf8'));
            }
            catch (err) {
                reject(console.log(err.message));
            }
        });
    });
}
exports.lerCofrinho = lerCofrinho;
//# sourceMappingURL=Persistencia.js.map