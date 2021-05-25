 
const { User } = require("../models/");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const SHA256 = require("crypto-js/sha256");

exports.signup = (req, res, next) => {

  // source regex = OWASP Validation Regex Repository
  const regex = new RegExp(
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
  );
  // Verifie si le password respect le regex
  if(regex.test(req.body.password)){

  // cryptage de l'email
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      // masquage de l'email
      emailmasked = SHA256(req.body.email).toString();
      // instance un utilisateur via la classe USER
      const user = new User({
        email: emailmasked,
        pseudo : req.body.pseudo,
        password: hash,
        role : req.body.role
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
  } else {
    res.status(400).json({
      message : "mot de passe pas assez sécurisé "
    })
  }

};


exports.login = (req, res, next) => {

  const email = req.body.email
  const emailMasked = SHA256(email).toString();

  // trouvé l'email dans la db et le compare et l'email reçu
  User.findOne({ where : { email: emailMasked} })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      // comparaison des 2 mdp crypté via bcrypt
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            token: jwt.sign(
              { userId: user.id,
                userRole : user.role
                },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};