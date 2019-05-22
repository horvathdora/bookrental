const renderMW = require('../middleware/generic/render');
const authMW = require('../middleware/generic/auth');

const getReadersListMW = require('../middleware/readers/getReadersList');
const getReaderMW = require('../middleware/readers/getReader');

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

    /** lists the readers*/
    app.get('/readers',
        authMW(objRepo),
        getReadersListMW(objRepo),
        renderMW(objRepo, 'readers')
    );

}