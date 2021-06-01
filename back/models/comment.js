const models =  require('./');
module.exports = (sequelize, Datatypes) => {
  const Comment = sequelize.define('Comment', {
      id: {
          type: Datatypes.INTEGER,
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: true
      },
      content: {
          type: Datatypes.TEXT,
          allowNull: false
      }
  });

  return Comment;
}