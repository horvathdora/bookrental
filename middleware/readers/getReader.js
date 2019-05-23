/**
 * getReader
 * description
 */

const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const readerModel = requireOption(objectrepository, 'readerModel');

    return function (req, res, next) {
        return next();
    };
};