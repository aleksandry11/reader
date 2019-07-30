const UserController = require('../controllers/UserController');
const BookController = require('../controllers/BookController');
const BookmarkController = require('../controllers/BookmarkController');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send(JSON.stringify({map: 'root'}));
    });

    // authentication
    app.post('/auth/sign-up', UserController.add);

    app.post('/auth/login', (req, res) => {

    });
}