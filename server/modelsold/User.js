const BaseModel = require('./BaseModel');
const Sequelize = require('sequelize');
const sequelize = require('../db');

class User extends BaseModel {}

User.init({
    // attributes
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
});


module.exports = User;