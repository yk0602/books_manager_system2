var sysadmin =


module.exports = {
    /*系统管理员的工作界面*/
    mainPage: function(req, res, next) {
        if(req.session.isSysadmin && req.session.isSysadmin === true)
            res.render('sysadmin/index');
        else
            res.redirect('/sysadmin/login');
    },
    /*系统管理员登录页面*/
    getLogin: function(req, res, next) {
        res.render('sysadmin/login');
    },
    /*处理系统管理员的登录操作*/
    postLogin: function(req, res, next) {
        if(req.body.userName === 'system' && req.body.passwd === 'system') {
            req.session.isSysadmin = true;
            res.redirect('/sysadmin');
        } else {
            res.redirect('/sysadmin/login');
        }
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