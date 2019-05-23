/**
 * deleteMybook
 * description
 */

const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const bookModel = requireOption(objectrepository, 'bookModel');
    const userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        userModel.findOne({_id: req.session.userid}, function (err, user) {
            user.books--;
            user.save(function (err) {

                res.local.book.remove(function (err) {
                    return next();
                });
            })
        })
    };
};