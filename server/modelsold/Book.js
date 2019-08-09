const BaseModel = require('./BaseModel');
const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

class Book extends BaseModel {
    
}

Book.init(
    {
    // attributes
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        path: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, 
    {
        underscored: true,
        sequelize,
        modelName: 'book'
    }
);

User.hasMany(Book);

module.exports = Book;
