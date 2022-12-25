
express = require('express');
const argon2 = require('argon2');
const accountRouter = require('./account.router');

const router = express.Router();

const initRouter =  (app) => {
  let hash = "1233";
  router.get('/', (_req, res) => res.send(hash));
  accountRouter(router);
  return app.use('/',router)
}

module.exports = initRouter;