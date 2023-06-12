var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')
/* GET users listing. */
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/users', userController.users);
router.post('/create', userController.create);
router.post('/delete', userController.delete);
router.post('/login', userController.postLogin);

module.exports = router;
