/**
 * getBook
 * description
 */

const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
        if (typeof res.local === "undefined") {
            res.local = {};
        }

        bookModel.findOne(
            {_id: req.params.bookid},
            function (err, result) {
                res.local.book = result;
                return next();
            });
    };
};