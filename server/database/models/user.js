'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Book, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      },
      targetKey: 'id'
    });
  };
  return User;
};