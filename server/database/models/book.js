'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.User, { foreignKey: 'user_id' });
  };
  return Book;
};