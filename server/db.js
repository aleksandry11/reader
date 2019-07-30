const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
    omitNull: true
});

module.exports = sequelize;