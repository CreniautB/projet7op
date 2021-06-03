module.exports = app => {
  const message = require("../controllers/messageCTRL.js");
  const comment = require("../controllers/commentCTRL.js");


  const auth = require('../middleware/auth');

  let router = require("express").Router();

  router.post('/', auth, message.create);

  router.get('/', auth, message.getAll);

  router.delete('/:id', auth, message.deleteMessage);

  router.patch('/:id/:userId', auth, message.modifyMessage);

  // Commentaire

  router.put('/:id/com', auth, comment.commentCreate);

  router.delete('/com/:comId', auth, comment.deleteCom)

  router.patch('/com/:comId/:userId', auth, comment.modifyComment)

  app.use('/message', router);

};