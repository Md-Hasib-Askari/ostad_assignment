const express = require('express')
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const xssClean = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const authRouter = require('./src/Routes/auth');
const studentsRouter = require('./src/Routes/students');
const worksRouter = require('./src/Routes/works');

// Middlewares
app.use(cors());
app.use(helmet());
app.use(hpp({checkBody: true, checkQuery: true}));
app.use(xssClean())
app.use(mongoSanitize());
app.use(bodyParser.json());
app.use(cookieParser());

// Database
mongoose.connect('mongodb://0.0.0.0:27017/student')
    .then(r => console.log('Database Connected'));

app.use('/api/V1/auth/', authRouter);
app.use('/api/V1/student/', studentsRouter);
app.use('/api/V1/work/', worksRouter);

module.exports = app;