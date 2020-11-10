const Login = require('../models/LoginModel');
module.exports ={
  index(req,res){
    res.render('login');
  },
  async create (req,res){ 

    const login = new Login(req.body);

    await login.register();
    
    if(login.errors.length > 0){

      req.flash('errors', login.errors);
      req.session.save(function(){
        
        res.redirect('back');

      });

      return;

    }

    res.send(login.user);

  }
}