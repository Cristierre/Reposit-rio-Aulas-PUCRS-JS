import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import {path as pathLivros, router as routerLivros} from './api/livro.rotas';

const app = express();
app.set('port', process.env.PORT);
app.use(bodyParser.json());

app.use(pathLivros, routerLivros);

if(process.env.NODE_ENV !== "production"){
    app.use(errorHandler);
}

export default app;