module.exports = {
    //httpServer监听端口
    port: '8080',
    //系统管理员会话保留时间
    sysadminMaxAge: 7 * 24 * 60 * 60 * 1000,
    //图书管理员会话保留时间
    bookadminMaxAge: 7 * 24 * 60 * 60 * 1000,
    //MongoDB地址
    url: 'mongodb://localhost:27017/bms',
    //系统管理员口令与密码配置
    sysadmin: {
        userName: 'system',
        passwd: 'system'
    }
};