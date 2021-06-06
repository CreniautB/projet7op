module.exports = app => {
    const user = require("../controllers/userCTRL.js");

    const auth = require('../middleware/auth');

  
    let router = require("express").Router();

    
    router.post('/signup', user.signup);

    router.post('/login', user.login);

    router.delete('/delete/:id', auth, user.deleteAcc)
  

    
    app.use('/user', router);
  };
  
