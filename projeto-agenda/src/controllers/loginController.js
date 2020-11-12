const Login = require('../models/LoginModel');
module.exports ={
  index(req,res){
    if(req.session.user) return res.render('login-logado');
  return  res.render('login');
  },
  async create (req,res){ 
    try {
      const login = new Login(req.body);

    await login.register();
    
    if(login.errors.length > 0){

      req.flash('errors', login.errors);
      req.session.save(function(){
        
        res.redirect('back');

      });

      return;

    }
    req.flash('success', 'Usuário criado com sucesso.');
    req.session.save(function(){
      
      res.redirect('back');

    });

    } catch (error) {
      console.log(error);
      res.render('404')
    }
  },

  async session(req,res){
    try {
      const login = new Login(req.body);

    await login.session();
    
    if(login.errors.length > 0){

      req.flash('errors', login.errors);
      req.session.save(function(){
        
      return  res.redirect('back');

      });

      return;

    }
    req.flash('success', 'Logado com sucesso.');
    req.session.user = login.user;
    req.session.save(function(){
      
      res.redirect('back');

    });

    } catch (error) {
      console.log(error);
      res.render('404')
    }
  },
 async  logout(req,res){
    req.session.destroy();
    res.redirect('/');
  }
}