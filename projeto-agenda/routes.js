const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const {loginRequired} = require('./src/middlewares/middleware');


// Rotas da home
route.get('/', homeController.index);

route.get('/login',loginController.index );
route.post('/login/register',loginController.create);
route.post('/login/session',loginController.session);
route.get('/login/logout',loginController.logout);

route.get('/contato', loginRequired,contatoController.index);
route.post('/contato/register', loginRequired,contatoController.register);
route.get('/contato/index/:id', loginRequired,contatoController.update);
route.post('/contato/edit/:id', loginRequired,contatoController.edit);
route.get('/contato/delete/:id', loginRequired,contatoController.delete);








module.exports = route;
