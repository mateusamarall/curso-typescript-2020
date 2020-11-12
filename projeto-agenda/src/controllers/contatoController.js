const Contato = require('../models/ContatoModel');

module.exports = {
  index(req,res){
    res.render('contato');
  },

  async register(req,res){
    try {
      const contato = new Contato(req.body);
      await contato.register();
      
      if(contato.errors.length > 0){
        req.flash('errors', contato.errors);
  
        req.session.save(()=>res.redirect('back'));
        return;
      }

      req.flash('success', 'Contato registrado com sucesso');
      req.session.save(()=>res.redirect('back'));
      return;
    } catch (error) {
      console.log(error);

      return res.render('404');
    }

  },
  update(req,res){

 } 
}