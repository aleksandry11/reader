const AuthRouter = require('express').Router();
const AuthController = require('../../controllers/AuthController');

AuthRouter.route('/sign-up')
    .post(AuthController.register);

AuthRouter.route('/login/')
    .post(AuthController.login);

AuthRouter.route('/token-verify/')
    .post(AuthController.verifyToken);


module.exports = AuthRouter;