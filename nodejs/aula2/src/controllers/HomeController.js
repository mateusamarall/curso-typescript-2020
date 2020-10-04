
const HomeModel = require('../models/Home');

HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));
exports.paginaInicial = (req, res) => {

    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send('sou sua nova rota de post');
}