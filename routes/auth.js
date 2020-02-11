const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const {disallowRoles, Roles} = require('../auth/acl');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/logout', disallowRoles(Roles.GUEST), AuthController.logout)

module.exports = router;