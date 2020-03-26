const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);






/**
 * Metodos HTTP
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Apagar uma informação no back-end
 * 
 * 
 * Tipos de parametros
 * dentro do REQUEST
 * QUERY PARAMS: Parametros enviados nomeados na rota apos  a '?' - servem para filtros, paginação usando '&'
 * ROUTE PARAMS: Paramentros utilizados para identificar recursos
 * REQUEST BODY: Corpo da requisição utilizado para criar ou alterar recursos
 * 
 * 
 */


