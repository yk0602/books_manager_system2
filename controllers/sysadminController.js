function isSysadmin(req) {
    return req.session.isSysadmin && req.session.isSysadmin === true;
}


module.exports = {
    /*系统管理员的工作界面*/
    mainPage: function(req, res, next) {
        if(isSysadmin(req))
            res.render('sysadmin/index', {userName: 'system'});
        else
            res.redirect('/sysadmin/login');
    },
    /*系统管理员登录页面*/
    getLogin: function(req, res, next) {
        if(isSysadmin(req))
            res.redirect('/sysadmin');
        else
            res.render('sysadmin/login');
    },
    /*处理系统管理员的登录操作*/
    postLogin: function(req, res, next) {
        if(req.body.userName === 'system' && req.body.passwd === 'system') {
            req.session.isSysadmin = true;
            if(!req.body.isRemember)
                req.session.cookie.expires = false;
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