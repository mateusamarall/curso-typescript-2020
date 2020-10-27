const Login = require('../models/LoginModel');
module.exports ={
  index(req,res){
    res.render('login');
  },
  create (req,res){ 

    const login = new Login(req.body);

    login.register();

    res.json(login.body);

  }
}