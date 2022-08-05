const express = require('express');
const helmet = require('helmet');
const limiter = require('./helpers/limiter');
require('dotenv').config();
const talkerRouter = require('./routers/talker.router');
const loginRouter = require('./routers/login.router');
const error = require('./middlewares/error');
const rescue = require('express-rescue');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());

app.use('/talker', rescue(talkerRouter));
app.use('/login', rescue(loginRouter));

app.use(error);

module.exports = app;