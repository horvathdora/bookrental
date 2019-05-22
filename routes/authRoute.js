const renderMW = require('../middleware/generic/render');
const authMW = require('../middleware/generic/auth');

const redirectMW = require('../middleware/generic/redirect');
const checkUserMW = require('../middleware/generic/checkUser');
const logoutMW = require('../middleware/generic/logout');
const addUserMW = require('../middleware/user/addUser');
//const sendPassMW = require('../middleware/user/sendPassw');

const bookModel = require('../models/book');
const readerModel = require('../models/reader');
const rentalModel = require('../models/rental');
const userModel = require('../models/user');

module.exports = function (app) {
    let objRepo = {
        bookModel: bookModel,
        readerModel: readerModel,
        rentalModel: rentalModel,
        userModel: userModel};

    app.use('/login',
        checkUserMW(objRepo),
        renderMW(objRepo,'login')
    );

    app.get('/logout',
        logoutMW(objRepo)
    );

    app.use('/register',
        addUserMW(objRepo),
        renderMW(objRepo, 'registration')
    );

    app.get('/landing',
        renderMW(objRepo, 'index')
    )

    app.get('/',
        redirectMW(objRepo)
    );

    /*
    app.use('/forgotpass',
        sendPassMW(objRepo),
        renderMW(objRepo, 'forgotPassword')
    );
    */

}