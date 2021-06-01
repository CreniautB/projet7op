module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
      id: {
          type: Datatypes.INTEGER,
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: true
      },
      email: {
          type: Datatypes.STRING,
          allowNull: false,
          isEmail: true,
          unique: true,
      },
      password: {
          type: Datatypes.STRING,
          allowNull: false
      },
      role: {
          type: Datatypes.STRING,
          allowNull: false,
          defaultValue: "user"
      }
  });

  User.associate = (models) => {
    User.hasMany(models.Comment, { as : 'userCom', onDelete: 'CASCADE',});
    User.hasMany(models.Message, { as : 'userMsg', onDelete: 'CASCADE',});
  };

  return User;
}