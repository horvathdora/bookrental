/**
 * render
 * using the template engine render the values into the template
 */

const requireOption = require('../common');

module.exports = function (objectrepository, viewName) {

    return function (req, res, next) {
        if(typeof res.local === "undefined")
            res.local = {};
        res.render(viewName, {data: res.local, userid: req.session.userid});
    };
};