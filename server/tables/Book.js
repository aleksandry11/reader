const Sequelize = require('sequelize');
const sequelize = require('../db');

class Book extends Sequelize.Model {}

Book.init({
    // attributes
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'book'
  });

module.exports = Book;
