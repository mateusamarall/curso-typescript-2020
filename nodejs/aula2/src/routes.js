const express = require('express');
const HomeController = require('./controllers/HomeController');
const ContatoController = require('./controllers/ContatoController');

const routes = express.Router();

routes.get('/', HomeController.paginaInicial);

routes.post('/', HomeController.trataPost);

routes.get('/contato', ContatoController.paginaInicial);


module.exports = routes;
