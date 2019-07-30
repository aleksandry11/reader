const Sequelize = require('sequelize');
const sequelize = require('../db');

class Bookmark extends Sequelize.model {}

Bookmark.init({
    // attributes
    book: {
      type: Sequelize.STRING,
      allowNull: false
    },
    page: {
      type: Sequelize.STRING,
      allowNull: false
    }
}, {
    sequelize,
    modelName: 'bookmark'
});

module.exports = Bookmark;