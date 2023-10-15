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
const AuthVerifyMiddleware = require('./src/Middlewares/AuthVerifyMiddleware')


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
    .then(() => console.log('Database Connected'));

app.use('/api/V1/auth/', authRouter);
app.use('/api/V1/student/', studentsRouter);
app.use('/api/V1/work/', AuthVerifyMiddleware, worksRouter);
app.get('*', (req, res) => {
    res.status(404).json({status: 'fail', message: "Page Not Found!"})
})

module.exports = app;