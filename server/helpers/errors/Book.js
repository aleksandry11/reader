const ErrorHandler = require('../ErrorHandler');

class BookNotFound extends ErrorHandler
{
    constructor(message)
    {
        super(message || 'Book not found', 404);
    }
}

class NoResourceToUpload extends ErrorHandler
{
    constructor(message)
    {
        super(message || 'Nothing to upload', 400);
    }
}

class WrongFileType extends ErrorHandler
{
    constructor(message)
    {
        super(message || 'This file type is not supported', 400);
    }
}

module.exports = {
    BookNotFound,
    NoResourceToUpload,
    WrongFileType
};