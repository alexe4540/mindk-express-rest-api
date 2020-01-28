const router = require('express').Router();
const { AttachResourceController } = require('../helpers/resources');
const ProductController = require('../controllers/product.controller');

AttachResourceController(router, ProductController);

module.exports = router;
