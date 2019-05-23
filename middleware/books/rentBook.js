/**
 * rentBook
 * description
 */
const dateFormat = require('dateformat');
const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
        if(typeof req.query === "undefined"){
            return next();
        } else {
            res.local.book.rentedBy = req.session.userid;
            res.local.book.rentedDate = dateFormat(Date.now(), "yyyy-mm-dd");
            res.local.book.save(function (err) {
                return res.redirect("/rentals")
            })
        }
    };
};