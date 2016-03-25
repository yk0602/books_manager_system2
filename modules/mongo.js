var mongo = require('mongoskin');
var Server = mongo.Server;
var Db = mongo.Db;
var db = new Db('bms', new Server('localhost', 27017, {poolSize: 1}), {w: 1, promiseLibrary: 'bluebird'});
module.exports = db;
