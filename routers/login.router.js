const express = require('express');
const login = require('../services/login.service');

const loginRouter = express.Router();

loginRouter.post('/', login);

module.exports = loginRouter;
