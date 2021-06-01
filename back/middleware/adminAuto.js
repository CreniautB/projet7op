const utilsToken = require("../middleware/tokenUtils")

module.exports = (req, res, next) => {

    try {
        const userId = utilsToken.getId(req)
        const userRole = utilsToken.getRole(req)

        console.log(userRole)

        if ( userRole === "admin" || (req.body.userId && req.body.userId == userId) ) {
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