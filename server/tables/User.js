const Sequelize = require('sequelize');
const sequelize = require('../db');

class User extends Sequelize.Model {}

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