var express = require('express');
var controllers = require('../controllers/controllers');
var router = express.Router();

/* GET home page. */
router.all('/', controllers.mainPage);
router.get('/session', controllers.session);
router.get('/test', function(req, res, next) {
   res.render('test');
});
module.exports = router;
