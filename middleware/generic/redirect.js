/**
 * redirect
 * description
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(typeof req.session.userid !== "undefined") {
            return res.redirect('/landing');
        }
        else{
            return res.redirect('/login');
        }
    };
};