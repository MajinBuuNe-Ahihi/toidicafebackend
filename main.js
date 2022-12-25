const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const { default: helmet } = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const initRouter = require('./src/router/index');
const os = require('os')
const morgan = require('morgan');
const logger = require('./src/library/logger.lib');



const app = express();


dotenv.config();
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: false,
  }),
) 

app.use(morgan('combined',{stream:logger.stream}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

initRouter(app);

app.use('*', (req, res) => {
  console.log(JSON.stringify(req.body.email));
  return res.status(400).json({ a: "404" })
});

module.exports = app;
