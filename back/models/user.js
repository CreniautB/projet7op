'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    password: DataTypes.STRING,
    role: { type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user"
        },
  }, {});
  return User;
};