/**
 * returnRental
 * description
 */
const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
        if(typeof req.query === "undefined"){
            return next();
        } else {
            res.local.book.rentedBy = null;
            res.local.book.rentedDate = null;
            res.local.book.save(function (err) {
                return res.redirect("/rentals")
            })
        }
    };
};