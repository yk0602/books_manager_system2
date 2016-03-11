module.exports = {
    /*系统管理员的工作界面*/
    mainPage: function(req, res, next) {
        res.render('sysadmin/index');
    },
    /*系统管理员登录页面*/
    getLogin: function(req, res, next) {
        req.session.username = 'admin';
        req.session.password = 'admin';
        console.log(req.sessionID);
        res.render('sysadmin/login');
    },
    /*处理系统管理员的登录操作*/
    postLogin: function(req, res, next) {

    },
    /*添加图书管理员*/
    addBookAdmin: function(req, res, next) {

    },
    /*删除图书管理员*/
    removeBookAdmin: function(req, res, next) {

    },
    /*添加图书*/
    addBook: function(req, res, next) {

    },
    /*删除图书*/
    removeBook: function(req, res, next) {

    }
};