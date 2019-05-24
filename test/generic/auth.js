var expect = require('chai').expect;
var authMW = require('../../middleware/generic/auth');

describe('auth MW', function() {
    it('should call next if userid exists', function (done) {
        var reqMock = {
            session: {
                userid: 'user1'
            }
        };
        authMW({})(reqMock,{},function () {
            done();
        });
    });

    it('should call res.redirect if userid undefined', function (done) {
        var reqMock = {
            session: {
            }
        };
        var resMock = {
            redirect(url){
                expect(url).to.be.eql('/login');
                done();
            }
        };
        authMW({})(reqMock,resMock,function () {
            expect('next should be not called').to.be.eql(false);
        });
    });
});