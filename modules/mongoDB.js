var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var url = require('../config').url;

var server = new Server('localhost', '27017');
var db = new Db('bms', server);
db.open(function(err, database) {
    database.collection('sessions').find().toArray(function(err, docs) {
        console.log('docs：　' + docs);
    });
})
module.exports = db;
