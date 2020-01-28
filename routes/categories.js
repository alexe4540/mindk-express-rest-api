const router = require('express').Router();
const { AttachResourceController } = require('../helpers/resources');
const CategorieController = require('../controllers/category.controller');

AttachResourceController(router, CategorieController);

module.exports = router;
