const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userRole = decodedToken.userRole
        const userId = decodedToken.userId


        if ( userRole === "admin" ||(req.body.userId && req.body.userId == userId) ) {
            next();
        } else {
            throw new Error(`Vous n'êtes pas autorisé(e) à réaliser cette action`);
        }
      } catch {
        res.status(401).json({
          error: new Error('Invalid request!')
        });
      }

}