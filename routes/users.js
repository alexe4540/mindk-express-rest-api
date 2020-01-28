const router = require('express').Router();
const { AttachResourceController } = require('../helpers/resources');
const UserController = require('../controllers/user.controller');

AttachResourceController(router, UserController);

module.exports = router;
