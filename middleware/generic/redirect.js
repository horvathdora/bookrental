/**
 * redirect
 * description
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        return res.redirect('/landing');//meg kell majd vizsgálni, hogy be van-e jelentkezve a felhasználó
    };
};