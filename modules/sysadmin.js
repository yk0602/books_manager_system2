var db = require('./mongo');
var Promise = require('bluebird');
function SysAdmin(userName, passwd) {
    this.userName = userName;
    this.passwd = passwd;
}

SysAdmin.prototype.getAllBookAdmin = function() {
    return new Promise(function(resolve, reject) {
        db.collection('bookadmins').find().toArray(function(err, docs) {
            if(err)
                reject(err);
            else
                resolve(docs);
        });
    });
}

SysAdmin.prototype.getBookAdminById = function(id) {
    return new Promise(function(resolve, reject) {
       db.collection('bookadmins').findOne({id: id}, function(err, doc) {
          if(err)
            reject(err);
          else{
              resolve(doc);
          }
       });
    });
};

SysAdmin.prototype.getBookAdminByName = function(name) {
    return new Promise(function(resolve, reject) {
       db.collection('bookadmins').find({name: name}).toArray(function(err, docs) {
           if(err)
                reject(err);
           else
                resolve(docs);
       });
    });
};

SysAdmin.prototype.addBookAdmin = function(id, name, passwd) {
    return new Promise(function(resolve, reject) {
       db.collection('bookadmins').insertOne({id: id, name: name, passwd: passwd}, function(err, res) {
           if(err)
                reject(err);
           else
                resolve(res);
       });
    });
};

SysAdmin.prototype.removeBookAdminById = function(id) {
    return new Promise(function(resolve, reject) {
        db.collection('bookadmins').removeMany({id: id}, {w:1}, function(err, res) {
            if(err)
                reject(err);
            else{
                resolve(res);
            }
        });
    });
};

SysAdmin.prototype.addBook = function(book) {
    return new Promise(function(resolve, reject) {
       db.collection('books').insertOne(book, function(err, res) {
          if(err)
              reject(err);
          else
              resolve(res);
       });
    });
};

SysAdmin.prototype.removeBookById = function(id) {
    return new Promise(function(resolve, reject) {
        db.collection('books').removeMany({id: id}, {w: 1}, function(err, res) {
            if(err)
                reject(err);
            else
                resolve(res);
        });
    });
};


module.exports = SysAdmin;