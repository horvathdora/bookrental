const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const bookModel = requireOption(objectrepository, 'bookModel');
    const userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        if ((typeof req.query.title === 'undefined') || req.query.title === '' ||
            (typeof req.query.author === 'undefined') || req.query.author === '') {
            return next();
        } else {
            var book = res.local.book;

            book.title = req.query.title;
            book.author = req.query.author;
            book.year = req.query.year;
            book.description = req.query.description;
            book.owner = req.session.userid;

            book.save(function (err) {
                return res.redirect("/mybooks");
            })
        }
    };
};