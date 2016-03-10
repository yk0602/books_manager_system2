var express = require('express');
var controllers = require('../controllers/controllers');
var router = express.Router();

/* GET home page. */
router.all('/', controllers.mainPage);
router.get('/register', controllers.getRegister);
router.post('register', controllers.postRegister);
router.get('/session', controllers.session);
module.exports = router;
