const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cartRoute = require('./src/Routes/CartItemRoute');
const userRoute = require('./src/Routes/UserRoute');
const productRoute = require('./src/Routes/productRoute');
const orderRoute = require('./src/Routes/orderRoute');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(hpp({checkBody: true, checkQuery: true}));

mongoose.connect('mongodb://127.0.0.1:27017/shop',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/api/v1/cart/', cartRoute);
app.use('/api/v1/user/', userRoute);
app.use('/api/v1/product/', productRoute);
app.use('/api/v1/order/', orderRoute);

module.exports = app;