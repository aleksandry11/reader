const BaseController = require('./BaseController');
const models = require('../database/models/index');
const Book = require('../database/models/index').Book;
const jwt = require('jsonwebtoken');
class BookController extends BaseController
{
    static add(req, res)
    {
        if (req.files.length === 0) {
            return res.send({errors: ['Nothing to upload']});
        }
        if (req.files[0].error) {
            return res.send({errors: [req.files[0].error]});
        }

        try {
                Book.create({
                    name: req.files[0].originalname,
                    path: req.files[0].path.replace(/\\/g, '/'),
                    user_id: parseInt(req.body.user_id)
                })
                .then( (book) => {
                    res.send(book.dataValues);
                });
            // res.send(req.files[0]);
        } catch (err) {
            res.send(err);
        }
    }

    static getAll(req, res)
    {
        const token = req.headers['authorization'].split(' ')[1];

        if (!token) {
            res.sendStatus(401);
        } else {
            const userId = jwt.decode(token).data.id;

                Book.findAll({where: {user_id: userId}}).then((books) => {
                    res.send(books);
                });
        }
    }

    static getBook(req, res)
    {
        Book.findAll({where: {id: Number(req.params.id)}}).then( books => {
            res.send(books[0]);            
        });
    }
}

module.exports = BookController;