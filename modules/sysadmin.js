var db = require('./mongo');

function SysAdmin(userName, passwd) {
    this.userName = userName;
    this.passwd = passwd;
}

SysAdmin.prototype.getAllBookAdmin = function() {
    return db.collection('bookadmins').find().toArray(function (err, docs) {
            console.log(docs);
        })

}

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