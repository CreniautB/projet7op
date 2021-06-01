const jwt = require('jsonwebtoken');
const { Comment } = require("../models/")
const utilsToken = require("../middleware/tokenUtils")

// Réupération du userId


exports.commentCreate = (req, res, next) => {

    const userId = utilsToken.getId(req)
  
    const comment = new Comment ({
      content : req.body.content,
      UserId : userId,
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

  
exports.deleteCom = (req, res, next) => {

    Comment.destroy({
        where: { id: req.params.comId }
    }) .then(() => {
      res.status(201).json({ message : "message suprimé"});
    })
    .catch((error) => {
      res.status(400).json({ error });
    })
  
  };

  exports.modifyComment = (req, res, next) => {

    const newContent = req.body.content
  
    Comment.update({ content: newContent },{ where: { id: req.params.comId }})
    .then(response => {
      if (response > 0) { res.status(200).json({ message: "Commentaire modifié" });
      } else { res.status(400).json({ error: "Ce Commentaire n'existe pas" });
    }
  })
  .catch(error => res.status(500).json({ error}))
  }
  