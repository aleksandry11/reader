const Joi = require('@hapi/joi');

const auth = Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
});

module.exports = {
    auth
}