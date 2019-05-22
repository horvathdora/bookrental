const renderMW = require('../middleware/generic/render');
const authMW = require('../middleware/generic/auth');

const rentBookMW = require('../middleware/books/rentBook');
const getBooksListMW = require('../middleware/books/getBooksList');
const getBookMW = require('../middleware/books/getBook');
const addBookMW = require('../middleware/books/addBook');

const bookModel = require('../models/book');
const readerModel = require('../models/reader');
const rentalModel = require('../models/rental');
const userModel = require('../models/user');

module.exports = function (app) {
    let objRepo = {
        bookModel: bookModel,
        readerModel: readerModel,
        rentalModel: rentalModel,
        userModel: userModel
    };

    /** lists all the booksl*/
    app.get('/books',
        authMW(objRepo),
        getBooksListMW(objRepo),
        renderMW(objRepo, 'books')
    );

    /** views the selected book*/
    app.get('/books/view/:bookid',
        authMW(objRepo),
        getBookMW(objRepo),
        renderMW(objRepo, 'viewbook')
    );

    /** user rents a book*/
    app.use('/books/rent',
        authMW(objRepo),
        getBookMW(objRepo),
        rentBookMW(objRepo),
        renderMW(objRepo, 'rentals')
    );

    app.use('/books/newbook',
        authMW(objRepo),
        addBookMW(objRepo),
        renderMW(objRepo, 'newbook')
    );
};

