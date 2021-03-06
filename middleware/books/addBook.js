const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const bookModel = requireOption(objectrepository, 'bookModel');
    const userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        let newBook = new bookModel();

        if ((typeof req.query.title === 'undefined') || req.query.title === '' ||
            (typeof req.query.author === 'undefined') || req.query.author === '')
            return next();
        else {
            bookModel.findOne(
                {title: req.query.title},
                function (err, result) {
                    if (err || result !== null) {
                        return next();
                    } else {
                        newBook.title = req.query.title;
                        newBook.author = req.query.author;
                        newBook.year = req.query.year;
                        newBook.description = req.query.description;
                        newBook.owner = req.session.userid;

                        userModel.findOne({_id: req.session.userid}, function (err, user) {
                            user.books++;
                            user.save(function (err) {
                                newBook.save(function (err) {
                                    if (err)
                                        return next();

                                    return res.redirect('/mybooks');
                                });
                            });
                        });
                    }
                }
            )
        }
    };
};