var express = require('express');
var sysadminController = require('../controllers/sysadminController');
var router = express.Router();

router.all('/', sysadminController.mainPage);
/*获取登录页面*/
router.get('/login', sysadminController.getLogin);
router.post('/login', sysadminController.postLogin);
/*添加图书管理员*/
router.post('/addbookadmin', sysadminController.PostAddBookAdmin);
/*删除图书管理员*/
router.post('/removebookadmin', sysadminController.PostRemoveBookAdmin);
/*图书入库*/
router.post('/addbook', sysadminController.addBook);
/*图书出库*/
router.post('/removebook', sysadminController.removeBook);
module.exports = router;
