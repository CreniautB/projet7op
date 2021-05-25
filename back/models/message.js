'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: DataTypes.STRING,
  },
    {});
    Message.associate = models => {
      Message.hasMany(models.Comment)
      Message.belongsTo(models.User, { as: 'user', constraints: false })
    };
  return Message;
};

