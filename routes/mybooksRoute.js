const renderMW = require('../middleware/generic/render');
const authMW = require('../middleware/generic/auth');

const deleteMybookMW = require('../middleware/mybooks/deleteMybook');
const modifyMybookMW = require('../middleware/mybooks/modifyMybook');
const getMybooksListMW = require('../middleware/mybooks/getMybooksList');
const getBookMW = require('../middleware/books/getBook');

const bookModel = require('../models/book');
const readerModel = require('../models/reader');
const rentalModel = require('../models/rental');
const userModel = require('../models/user');

module.exports = function(app){
    let objRepo = {
        bookModel: bookModel,
        readerModel: readerModel,
        rentalModel: rentalModel,
        userModel: userModel
    };

    /** lists the user's own books*/
    app.get('/mybooks/:userid',
        authMW(objRepo),
        getMybooksListMW(objRepo),
        renderMW(objRepo, 'mybooks')
    );

    /** shows one book*/
    app.get('mybooks/:userid/view/:bookid',
        authMW(objRepo),
        getBookMW(objRepo),
        renderMW(objRepo, 'viewbook')
    );

    /** deletes a book
     * then redirects to /mybooks/:userid
    */
    app.use('/mybooks/:userid/del/:bookid',
        authMW(objRepo),
        getBookMW(objRepo),
        deleteMybookMW(objRepo),
        function (req, res, next){
            return res.redirect('mybooks');
        }
    );

    /** modifies a book*/
    app.use('/mybooks/:userid/mod/:bookid',
        authMW(objRepo),
        getBookMW(objRepo),
        modifyMybookMW(objRepo),
        renderMW(objRepo, 'newbook')
    );


}
