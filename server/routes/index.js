const AuthController = require('../controllers/AuthController');
const BookController = require('../controllers/BookController');
const BookmarkController = require('../controllers/BookmarkController');

module.exports = (app) => {
    app.use('/auth', require('./auth'));
    app.use('/user', require('./users'));   
    app.use('/books', require('./books'));

}