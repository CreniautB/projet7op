const jwt = require('jsonwebtoken');
const { Message } = require("../models/");
const { Comment } = require("../models/")
const user = require('../models/user');

// Réupération du userId
function getId(req) {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;
  return userId
}

exports.create = (req, res, next) => {

  const userId = getId(req)

  const msg = new Message({
    userId: userId,
    content: req.body.content      
  });
  msg.save()
    .then(() => {
      res.status(201).json({ message: "Test Msg Ok !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
  };
 
exports.getAll = (req, res, next) => {

  Message.findAll({
    include: [
      { model: Comment },
    ]
  })
  .then((messages) => {
    res.status(200).json(messages)
  })
  .catch((error) => {
    res.status(400).json({ error})
  })
};

exports.commentCreate = (req, res, next) => {

  const userId = getId(req)

  const comment = new Comment ({
    content : req.body.content,
    userId : userId,
    MessageId : req.params.id
  });
  comment.save()
  .then(() => {
    res.status(201).json({ message: "Test Com Ok !" });
  })
  .catch((error) => {
    res.status(400).json({ error });
  });
}


  