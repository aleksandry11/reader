const AuthController = require('../controllers/AuthController');
const BookController = require('../controllers/BookController');
const BookmarkController = require('../controllers/BookmarkController');

module.exports = (app) => {
    // authentication
    app.use('/auth', require('./auth'));
    app.use('/user', require('./users'));   
}