const BookController = require('../../controllers/BookController');
const BookRouter = require('express').Router();
const upload = require('../../helpers/MulterStorage');


BookRouter.route('/')
    .post(upload.any(), BookController.add)
    .get(BookController.getAll);

BookRouter.route('/:id')
    .get(BookController.getBook)


module.exports = BookRouter;