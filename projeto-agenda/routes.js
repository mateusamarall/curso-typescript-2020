const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');


// Rotas da home
route.get('/', homeController.index);

route.get('/login',loginController.index );
route.post('/login/register',loginController.create);
route.post('/login/session',loginController.session);
route.get('/login/logout',loginController.logout);





module.exports = route;
