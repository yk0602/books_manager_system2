var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/bms';
function getDB(cb) {
    MongoClient.connect(url).then(function(db) {
        return db
    });
}


module.exports = db;