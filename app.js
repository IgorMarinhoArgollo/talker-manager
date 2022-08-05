const express = require('express');
const helmet = require('helmet');
const limiter = require('./helpers/limiter');
const error = require('./middlewares/error');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());


app.use(error);

module.exports = app;