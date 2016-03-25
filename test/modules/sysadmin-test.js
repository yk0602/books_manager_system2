var SysAdmin = require('../../modules/sysadmin');
var should = require('should');
var sysadmin = new SysAdmin();
var db = require('../../modules/mongo');
describe('sysadmin.js', function() {
    describe('#getAllBookAdmin()', function() {
        it('should return []', function(done) {
            sysadmin.getAllBookAdmin().then(function(docs) {
                docs.should.be.eql([]);
            }).nodeify(done);
        });
    });

    describe('#getBookAdminById', function() {
       before(function(done) {
            db.collection('bookadmins').insertOne({
                id: '10010',
                name: '张泽请',
                passwd: 'xyz'
            }, function() {
                done();
            });
       });

       it('should return null',  function(done) {
            sysadmin.getBookAdminById('10010').then(function(doc) {
                should.equal(doc.id, '10010');
            }).nodeify(done);
       });

       after(function(done) {
          db.collection('bookadmins').deleteOne({id: '10010'}, function() {
              done();
          })
       });
    });

    describe('#getBookAdminByName', function() {
        before(function(done) {
            db.collection('bookadmins').insertOne({
                id: '10010',
                name: '张泽请',
                passwd: 'xyz'
            }, function () {
                done();
            });
        });

        it('return docs length is 1', function(done) {
            sysadmin.getBookAdminByName('张泽请')
                .then(function(docs) {
                    should.equal(docs.length, 1);
                }).nodeify(done);
        });

        after(function(done) {
            db.collection('bookadmins').deleteOne({id: '10010'}, function() {
                done();
            })
        });
    });

    describe('#addBookAdmin', function() {
       it('should add a bookAdmin to db', function(done) {
           sysadmin.addBookAdmin('10011', 'Buddy', '123').nodeify(done);
       });
    });

    describe('#removeBookAdminById', function() {
       it('should delete a document from db', function(done) {
          sysadmin.removeBookAdminById('10011').nodeify(done);
       });
    });

    describe('#addBook', function() {
       it('add a book to db', function(done) {
          sysadmin.addBook({id: 'xxxfaewa13123', name: '三国演义', publish_date: '1993-6-1'}).nodeify(done);
       });
    });

    describe('#removeBook', function() {
       it('remove a book from db', function(done) {
          sysadmin.removeBookById('xxxfaewa13123').nodeify(done);
       });
    });
});