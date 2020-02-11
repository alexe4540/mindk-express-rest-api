require('dotenv').config();

const express = require('express');
const app = express();

const serviceLocator = require('./services/service.locator');

const auth = require('./routes/auth');
const users = require('./routes/users');
const products = require('./routes/products');
const orders = require('./routes/orders');
const categories = require('./routes/categories');

const passport = require('./auth/passport');
const authMiddleware = require("./auth/authMiddleware")

serviceLocator.register('db', require('knex')({
    client: process.env.DB_DRIVER,
    connection: {      
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
    }
  }))


// Bind routes:
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());

app.use(authMiddleware);

app.use(auth);
app.use('/user', users);
app.use('/order', orders);
app.use('/product', products);
app.use('/category', categories);


app.use(function(err, req, res, next){
  res.status(500).send({
    "message": err.toString()
  })
})

// Start app:
app.listen(process.env.APP_PORT, () => console.log(`API listening on port ${process.env.APP_PORT}!`));