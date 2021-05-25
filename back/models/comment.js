'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
  },
    {});
    Comment.associate = models => {
      Comment.belongsTo(models.User, { as: 'user', constraints: false })
    };
  return Comment;
};

