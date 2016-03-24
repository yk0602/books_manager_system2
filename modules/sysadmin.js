var db = require('../bin/www');

function SysAdmin(userName, passwd) {
    this.userName = userName;
    this.passwd = passwd;
}

SysAdmin.prototype.getAllBookAdmin = function() {
    console.log(db);
    return db.collection('bookadmins').find().toArray();
};

SysAdmin.prototype.getBookAdminById = function(id) {

};

SysAdmin.prototype.getBookAdminByName = function(name) {

};

SysAdmin.prototype.addBookAdmin = function(id, name, passwd) {

};

SysAdmin.prototype.removeBookAdmin = function(id) {

};

SysAdmin.prototype.addBook = function() {

};

SysAdmin.prototype.removeBook = function() {

};


module.exports = SysAdmin;