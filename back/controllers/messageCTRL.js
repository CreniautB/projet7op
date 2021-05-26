const models =  require('../models/');
const utilsToken = require('../middleware/tokenUtils');
const { mode } = require('crypto-js');

exports.create = (req, res, next) => {

  const userId = utilsToken.getId(req)

  const msg = new models.Message({
    userId: userId,
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

    attributes: ['content','createdAt'],
    order: [
        ['createdAt', 'DESC'],
        [models.Comment, 'createdAt', 'DESC'],
    ],
    include: [
      {
         model: models.User, as: 'user',
         attributes: ['pseudo', 'id']
      },
      {
        model : models.Comment,
        attributes: ['content', 'createdAt'],
        include: [ 
          { model : models.User, as: 'user',
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

  Message.destroy({
      where: { id: req.params.id }
  }) .then(() => {
    res.status(201).json({ message : 'message suprimé'});
  })
  .catch((error) => {
    res.status(400).json({ error });
  })

};

exports.modifyMessage = (req, res, next) => {

  const newContent = req.body.content

  Message.update({ content: newContent },{ where: { id: req.params.id }})
  .then(response => {
    if (response > 0) { res.status(200).json({ message: 'Méssage modifié' });
    } else { res.status(400).json({ error: "Ce message n'existe pas"});
  }
})
.catch(error => res.status(500).json({ error}))
}
