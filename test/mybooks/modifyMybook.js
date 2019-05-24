var expect = require('chai').expect;
var modifyMybookMW = require('../../middleware/mybooks/modifyMybook');

describe('modifyMybook MW', function() {
    it('should call next if req.query.title is undefined', function (done) {
        var reqMock = {
            query:{}
        };
        modifyMybookMW({bookModel: true, userModel: true})(reqMock, {}, function () {
            done();
        });
    });

    it('should call next if req.query.author is undefined', function (done) {
        var reqMock = {
            query:{}
        };
        modifyMybookMW({bookModel: true, userModel: true})(reqMock, {}, function () {
            done();
        });
    });
});