var SysAdmin = require('../../modules/sysadmin');
var should = require('should');
describe('sysadmin.js', function() {
    var sysadmin = new SysAdmin();
    describe('#getAllBookAdmin()', function() {
        it('return null', function() {
            return sysadmin.getAllBookAdmin().should.be.a.Promise();
        });
    });
});