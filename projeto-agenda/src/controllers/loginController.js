const Login = require('../models/LoginModel');
module.exports ={
  index(req,res){
    res.render('login');
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
  }
}