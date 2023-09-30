const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');

const router = require('./src/Routes/api')
const DatabaseConnector = require('./src/Helper/DatabaseConnector');

const app = express();

app.use(cors());
app.use(helmet());
app.use(hpp({checkQuery: true, checkBody: true}));

app.use('/db', DatabaseConnector.connectDB); // Database Connection Check
app.use('/', router);
app.use((req, res) => {
    res.status(404).send('Not Found');
});

module.exports = app;