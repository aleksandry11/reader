const BaseModel = require('./BaseModel');
const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

class Book extends BaseModel {

}

Book.init({
    // attributes
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: 'users',
      referencesKey: 'id'
    }
  }, {
    sequelize,
    modelName: 'book'
  });

User.hasMany(Book);

module.exports = Book;
