const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const bookModel = requireOption(objectrepository, 'bookModel');
    const userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        if ((typeof req.query.title === 'undefined') || req.query.title === '' ||
            (typeof req.query.author === 'undefined') || req.query.author === '')
            return next();
        else {
            res.local.book.title = req.query.title;
            res.local.book.author = req.query.author;
            res.local.book.year = req.query.year;
            res.local.book.description = req.query.description;
            res.local.book.owner = req.session.userid;

            res.local.book.save(function (err) {
                return res.redirect("/mybooks");
            })
        }
    };
};