const Sequelize = require('sequelize');
const sequelize = require('../db');

class BaseModel extends Sequelize.Model {
    
}

BaseModel.sq = sequelize;

module.exports = BaseModel;