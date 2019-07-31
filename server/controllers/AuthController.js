const BaseController = require('./BaseController');
const user = require('../tables/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController extends BaseController
{
    static register(req, res)
    {
        let errors = [];

        if (!req.body.email) {
            errors.push('No email provided');
        }

        if (!req.body.password) {
            errors.push('Password should not be empty');
        }

        if (errors.length === 0) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                user.sync({ force: false }).then(() => {
                    return user.create({
                        email: req.body.email,
                        password: hash
                    });
                });
            });

            res.send(req.body);
        } else {
            res.send({ errors: errors });
        }

    }

    static login(req, res, next)
    {
        user.findAll({ where: { email: req.body.email }}).then((user) => {
            if (user.length > 0) {
                const { password, ...reqUser } = user[0].dataValues;
                bcrypt.compare(req.body.password, password, (err, valid) => {
                    if (valid) {
                        jwt.sign({reqUser}, 'secretKey', { expiresIn: '604800s' }, (err, token) => {
                            res.send({token});
                        });
                    } else {
                        res.send({errors: ['Email or password is incorrect']});
                    }
                });
            } else {
                res.send({errors: ['No such email']});
            }
            
        });

        // res.send(req.body);
    }

    static verifyToken(req, res, next)
    {   
        // Get header value
        const bearerHeader = req.headers['authorization'];

        if (typeof bearerHeader !== 'undefined') {
            // Get token
            const token = bearerHeader.split(' ')[1];
            // Set token
            jwt.verify(token, 'secretKey', (err, data) => {
                if (!err) {
                    res.json({
                        message: 'Verifed',
                        data
                    });
                } else {
                    res.sendStatus(401);
                }
            });
        } else {
            // Forbidden
            res.sendStatus(401)
        }
    }
}

module.exports = AuthController;