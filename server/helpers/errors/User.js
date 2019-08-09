const ErrorHandler = require('../ErrorHandler');

class UserNotFound extends ErrorHandler
{
    constructor(message)
    {
        super(message || 'User not found.', 404);
    }
}

module.exports = {
    UserNotFound
};