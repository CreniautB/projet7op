module.exports = app => {
    const message = require("../controllers/messageCTRL.js");
    const auth = require('../middleware/auth');

    let router = require("express").Router();
  
    router.post('/', auth, message.create);

    router.get('/', auth, message.getAll);

    // Commentaire

    router.post('/:id/com', auth, message.commentCreate);

    app.use('/message', router);

  };
