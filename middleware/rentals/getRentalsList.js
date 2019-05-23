/**
 * getRentalsList
 * description
 */

const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {

        if (typeof res.local === "undefined") {
            res.local = {};
        }

        bookModel.find({rentedBy: req.session.userid},
            function (err, result) {
                if (typeof result === "undefined") {

                    res.local.books = [];
                } else {
                    res.local.books = result;

                    let i = 1;
                    result.forEach(book => {
                        book.ind = i++;
                    });
                }

                return next();
            });
    };
};