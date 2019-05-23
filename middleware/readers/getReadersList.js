/**
 * getReadersList
 * description
 */

const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        if (typeof res.local === "undefined") {
            res.local = {};
        }

        userModel.find({}, function (err, result) {
            if (typeof result === "undefined") {
                res.local.users = [];
            } else {
                res.local.users = result;
            }
            return next();
        });
    };
};