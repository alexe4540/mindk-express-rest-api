const router = require('express').Router();
const { AttachResourceController } = require('../helpers/resources');
const OrderController = require('../controllers/order.controller');

AttachResourceController(router, OrderController);

module.exports = router;
