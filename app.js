const express = require('express');
const helmet = require('helmet');
const limiter = require('./helpers/limiter');
require('dotenv').config();
const { productsRouter } = require('./routers/products.router');
const { salesRouter } = require('./routers/sales.router');
const error = require('./middlewares/error');
const rescue = require('express-rescue');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());

app.use('/sales', rescue(salesRouter));
app.use('/products', rescue(productsRouter));

app.use(error);

module.exports = app;