/**
 * render
 * using the template engine render the values into the template
 */

const requireOption = require('../common');

module.exports = function (objectrepository, viewName) {

    return function (req, res, next) {
        res.render(viewName, {data: res.local});
    };
};