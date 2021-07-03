const { Comment } = require("../models/")
const utilsToken = require("../middleware/tokenUtils")

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
    try {
      const userId = utilsToken.getId(req)
      const userRole = utilsToken.getRole(req)
      
      if ( userRole == "admin" || (req.body.userId == userId)) {
      Comment.destroy({
          where: { id: req.params.comId }
      }) .then(() => {
        res.status(201).json({ message : "message suprimé"});
      })
      .catch((error) => {
        res.status(400).json({ error });
      })    } else {
        throw new Error(`Vous n'êtes pas autorisé(e) à réaliser cette action`);
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
}};

exports.modifyComment = (req, res, next) => {

    try {
      const userId = utilsToken.getId(req)
      const userRole = utilsToken.getRole(req)
      
      if ( userRole == "admin" || (req.params.userId == userId)) {

        const newContent = req.body.content
      
        Comment.update({ content: newContent },{ where: { id: req.params.comId }})
        .then(response => {
          if (response > 0) { res.status(200).json({ message: "Commentaire modifié" });
          } else { res.status(400).json({ error: "Ce Commentaire n'existe pas" });
        }
      })
      .catch(error => res.status(500).json({ error}))
    } else {
      throw new Error(`Vous n'êtes pas autorisé(e) à réaliser cette action`);
    }
    } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
  }
  