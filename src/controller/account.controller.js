const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const logger = require('../library/logger.lib');

const signUp = (req,res) => {
  
}

const signIn = (req, res) => {
  try {
    console.log(req.body)
    let a = JSON.parse(req);
    console.log(a)
    return res.status(200).json(req.body);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(req.body);
  }
}

module.exports = {
  SIGNUP: signUp,
  SIGNIN: signIn,
}