module.exports = app => {
    const user = require("../controllers/userCTRL.js");
  
    let router = require("express").Router();
  
    // Create a new Tutorial
    router.post('/signup', user.signup);

    router.post('/login', user.login);
  
    app.use('/user', router);
  };
  
