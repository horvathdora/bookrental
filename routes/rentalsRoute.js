const renderMW = require('../middleware/generic/render');
const authMW = require('../middleware/generic/auth');

const getRentalsListMW = require('../middleware/rentals/getRentalsList');
const getBookMW = require('../middleware/books/getBook');
const returnRentalMW = require('../middleware/rentals/returnRental');

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

    /** lists the users rentals */
    app.get('/rentals',
        authMW(objRepo),
        getRentalsListMW(objRepo),
        renderMW(objRepo, 'rentals')
        );

    /** returns a rented book*/
    app.use('/rentals/return/:bookid',
        authMW(objRepo),
        getBookMW(objRepo),
        returnRentalMW(objRepo),
        renderMW(objRepo, 'rentals')
    );

}