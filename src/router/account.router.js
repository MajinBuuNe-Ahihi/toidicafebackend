
const { validator } = require('express-fastest-validator');
const { SIGNIN } = require('../controller/account.controller');
const { LOGIN_ACCOUNT_VALIDATOR } = require('../validator/account.validator');

const accountRouter = async (router) => {
  router.post('/account/signin',SIGNIN);
}

module.exports = accountRouter;