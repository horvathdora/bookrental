var expect = require('chai').expect;
var modifyMybookMW = require('../../middleware/mybooks/modifyMybook');

describe('modifyMybook MW', function() {
    it('should call next if req.query.title is undefined', function (done) {
        var reqMock = {
            query:{
            }
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

    it('should call redirect after save', function (done) {
        var reqMock = {
            query:{
                title: 'bookTitle',
                author: 'author',
                year: 'year',
                description: 'desc',
                owner: 'userid'
            },
            session: {
                userid: 'user1'
            }
        };
        var bookMock = {
            title: 'oldTitle',
            author: 'oldAuthor',
            year: 'oldYear',
            description: 'oldDesc',
            owner: 'oldUserid',
            save: function(cb){
                cb(undefined, {
                    url: '/mybooks'
                })
            }
        };
        var resMock = {
            local: {
                book: bookMock
            },
            redirect: function(url){
                expect(url).to.be.eql('/mybooks');
                done();
            }
        };
        modifyMybookMW({bookModel: true, userModel: true})(reqMock, resMock, function () {
           expect('next should be not called').to.be.eql(false);
        });
    });
});