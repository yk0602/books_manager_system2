var sysadmin = require('../config').sysadmin;

function isSysadmin(req) {
    return req.session && req.session.isSysadmin === true;
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
        if(req.body.userName === sysadmin.userName && req.body.passwd === sysadmin.passwd) {
            req.session.isSysadmin = true;
            if(!req.body.isRemember)
                req.session.cookie.expires = false;
            res.redirect('/sysadmin');
        } else {
            res.redirect('/sysadmin/login');
        }
    },
    /*添加图书管理员*/
    PostAddBookAdmin: function(req, res, next) {

    },
    /*删除图书管理员*/
    PostRemoveBookAdmin: function(req, res, next) {

    },
    /*添加图书*/
    addBook: function(req, res, next) {

    },
    /*删除图书*/
    removeBook: function(req, res, next) {

    }
};