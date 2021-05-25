module.exports = app => {
    const message = require("../controllers/messageCTRL.js");
    
    const auth = require('../middleware/auth');
    const auto = require('../middleware/adminAuto.js')


    let router = require("express").Router();
  
    router.post('/', auth, message.create);

    router.get('/', auth, message.getAll);

    router.delete('/:id', auth, auto, message.deleteMessage)

    // Commentaire

    router.put('/:id/com', auth, message.commentCreate);

    app.use('/message', router);

  };
