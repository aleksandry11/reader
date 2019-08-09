const BaseController = require('./BaseController');
const User = require('../database/models/index').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { auth } = require('../validation/auth');

class AuthController extends BaseController
{
    static register(req, res)
    {
        const registration = async () => {

            try {
                const validation = auth.validate(req.body);
                if (validation.error) {
                    throw new Error(validation.error.details[0].message)
                }
                const users = await User.findAll({ where: {email: req.body.email} });

                if (users.length > 0) {
                    throw new Error('An account using this email address has already been registered');
                } else {
                    const hashedPassword = await bcrypt.hash(req.body.password, 10);

                    User.create({
                        email: req.body.email,
                        password: hashedPassword
                    });
                    res.send(req.body);
                }
            } catch (err) {
                throw new Error(err.message);
            }
            
        }

        registration().catch(err => {
            console.log(err);
            res.send({errors: [err.message.replace(/Error\s/g, '')]});
        });
    }

    static login(req, res, next)
    {
        const verifyPassword = async () => {
            try {
                const requestedUserData = await User.findAll({where: {email: req.body.email}});

                if (requestedUserData.length === 0) {
                    throw new Error('No such email');
                }

                const { password, createdAt, updatedAt, ...data } = requestedUserData[0].dataValues;
                
                const match = await bcrypt.compare(req.body.password, requestedUserData[0].dataValues.password);

                if (match) {
                    jwt.sign({data}, 'secretKey', { expiresIn: '604800s' }, (err, token) => {
                        res.send({token});
                    });
                } else {
                    throw new Error('Wrong password');
                }
            } catch (err) {
                throw new Error(err.message);
            }
        }

        verifyPassword().catch(err => {
            console.log(err);
            res.send({errors: [err.message.replace(/Error\s/g, '')]});
        });
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