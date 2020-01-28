//require('dotenv').config();
const express = require('express');
const app = express();
const users = require('./routes/users');
const products = require('./routes/products');
const orders = require('./routes/orders');
const categories = require('./routes/categories');
const serviceLocator = require('./services/service.locator');

serviceLocator.register('db', require('knex')({
    client: 'pg',
    connection: {      
        host : '127.0.0.1',
        user : 'postgres',
        password : 'pass',
        database : 'fakebd'
    }
  }))


// Bind routes:
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/user', users);
app.use('/order', orders)
app.use('/product', products)
app.use('/category', categories)



// Start app:
//app.listen(process.env.APP_PORT, () => console.log(`API listening on port ${process.env.APP_PORT}!`))
app.listen(3000, () => console.log(`API listening on port ${3000}!`))