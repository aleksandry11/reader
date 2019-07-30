const BaseController = require('./BaseController');
const user = require('../tables/User');
const bcrypt = require('bcrypt');

class UserController extends BaseController
{
    static add(req, res)
    {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            user.sync({ force: false }).then(() => {
                return user.create({
                    email: req.body.email,
                    password: hash
                });
            });
        });

        res.send(req.body);
    }
}

module.exports = UserController;