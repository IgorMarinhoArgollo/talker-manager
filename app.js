const express = require('express');
const helmet = require('helmet');
const rescue = require('express-rescue');
const swaggerUi = require('swagger-ui-express');
const limiter = require('./middlewares/limiter');
require('dotenv').config();

const talkerRouter = require('./routers/talker.router');
const loginRouter = require('./routers/login.router');
const swaggerDocs = require('./swagger.json');

const errorMiddleware = require('./middlewares/error');

// to fix Swagger UI interface on vercel
const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

const app = express();
app.use(helmet());
app.use(limiter);
app.use(express.json());

app.use('/login', rescue(loginRouter));
app.use('/talker', rescue(talkerRouter));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }));

app.use(errorMiddleware);

module.exports = app;
