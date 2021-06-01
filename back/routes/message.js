module.exports = app => {
  const message = require("../controllers/messageCTRL.js");
  const comment = require("../controllers/commentCTRL.js");


  const auth = require('../middleware/auth');
  const auto = require('../middleware/adminAuto.js')


  let router = require("express").Router();

  router.post('/', auth, message.create);

  router.get('/', auth, message.getAll);

  router.delete('/:id', auth, auto, message.deleteMessage)

  router.patch('/:id', auth, auto, message.modifyMessage)

  // Commentaire

  router.put('/:id/com', auth, comment.commentCreate);

  router.delete('/:id/com/:comId', auth, auto, comment.deleteCom)

  router.patch('/:id/com/:comId', auth, auto, comment.modifyComment)



  app.use('/message', router);

};