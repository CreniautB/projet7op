module.exports = (sequelize, Datatypes) => {
  const Message = sequelize.define('Message', {
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
  Message.associate = (models) => {
      Message.hasMany(models.Comment, {as : 'Message', onDelete: 'CASCADE'})
  }
  return Message;
}