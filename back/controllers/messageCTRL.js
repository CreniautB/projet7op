const models =  require('../models/');
const utilsToken = require('../middleware/tokenUtils');

exports.create = (req, res, next) => {

  const userId = utilsToken.getId(req)

  const msg = new models.Message({
    UserId: userId,
    content: req.body.content      
  });
  msg.save()
    .then(() => {
      res.status(201).json({ message: 'Test Msg Ok !' });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
  };
 
exports.getAll = (req, res, next) => {

  models.Message.findAll({

    attributes: ['id', 'content', "createdAt"],
    order: [
        ['createdAt', 'ASC'],
        [models.Comment, 'createdAt', 'ASC'],
    ],
    include: [
        {
            model: models.User,
            attributes: ['pseudo', 'id']
        },
        {
            model: models.Comment,
            attributes: ['content', 'id', 'createdAt'],
            include: [
                {
                    model: models.User,
                    attributes: ['pseudo', 'id']
                }
            ]
        }
    ]
  })
  .then((messages) => {
    res.status(200).json(messages)
  })
  .catch((error) => {
    res.status(400).json({ error})
  })
};


exports.deleteMessage = (req, res, next) => {

  try {
    const userId = utilsToken.getId(req)
    const userRole = utilsToken.getRole(req)

    if ( userRole == "admin" || (req.body.userId == userId)) {
        
      models.Message.destroy({
           where: { id: req.params.id }
            }) .then(() => {
      res.status(201).json({ message : 'message suprimé'});

      })
      .catch((error) => {
        res.status(400).json({ error });
      })

    } else {
        throw new Error(`Vous n'êtes pas autorisé(e) à réaliser cette action`);
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }


};

exports.modifyMessage = (req, res, next) => {
  try {
    const userId = utilsToken.getId(req)
    const userRole = utilsToken.getRole(req)
    
    if ( userRole == "admin" || (req.params.userId == userId)) {

        const newContent = req.body.content
        
        models.Message.update({ content: newContent },{ where: { id: req.params.id }})
        .then(response => {
         
          if (response > 0) { res.status(200).json({ message: 'Méssage modifié' });
          } else { res.status(400).json({ error: "Ce message n'existe pas"});
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