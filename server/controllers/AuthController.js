const BaseController = require('./BaseController');
const User = require('../models/User');
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
        User.findAll({ where: {email: req.body.email }}).then((all) => {
            if (all.length > 0) {
                errors.push('An account using this email address has already been registered');
            }
            if (errors.length === 0) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    user.sync({ force: false }).then(() => {
                        return User.create({
                            email: req.body.email,
                            password: hash
                        });
                    });
                });
    
                res.send(req.body);
            } else {
                res.send({ errors: errors });
            }
            
        });
    }

    static login(req, res, next)
    {
        User.findAll({ where: { email: req.body.email }}).then((user) => {
            if (user.length > 0) {
                const { password, createdAt, updatedAt, ...data } = user[0].dataValues;
                bcrypt.compare(req.body.password, password, (err, valid) => {
                    if (valid) {
                        jwt.sign({data}, 'secretKey', { expiresIn: '604800s' }, (err, token) => {
                            res.send({token});
                        });
                    } else {
                        res.send({errors: ['Incorrect password']});
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