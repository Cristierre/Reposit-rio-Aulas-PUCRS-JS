import * as aloControlador from './alo.controlador';
import {Router} from 'express'; //  para configurar as rotas

export const router = Router();
const path = '/alo';
// se path faça isso... callback!
router.get(path, );
router.get(`${path}/erro`, aloControlador.getAloErro);
router.get(`${path}/:nome`, aloControlador.getAloComNome);
