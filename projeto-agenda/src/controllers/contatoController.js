const Contato = require('../models/ContatoModel');

module.exports = {
  index(req,res){
    res.render('contato',{
      contato:{}
    });
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
      req.session.save(()=>res.redirect(`/contato/index/${contato.contato.id}`));
      return;
    } catch (error) {
      console.log(error);

      return res.render('404');
    }

  },
  async update(req,res){
    if(!req.params.id){
      return res.render('404');
    }
    const contato = await Contato.buscaPorId(req.params.id);

    if(!contato) return res.render('404')
    res.render('contato',{
      contato
    });
 },

 async edit(req,res){
   try {
       if(!req.params.id) return res.render('404');

  const contato = new Contato(req.body);
  await contato.edit(req.params.id);

  if(contato.errors.length > 0){
    req.flash('errors', contato.errors);

    req.session.save(()=>res.redirect('back'));
    return;
  }

  req.flash('success', 'Contato editado com sucesso');
  req.session.save(()=>res.redirect(`/contato/index/${contato.contato.id}`));
  return;
   } catch (error) {
     console.log(error);
     res.render('404');
   }


 }
}