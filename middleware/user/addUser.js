/**
 * addUser
 * description
 */

const requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        let newUser = new userModel();

        if ((typeof req.query.lname === 'undefined') || req.query.lname === ''){
            return next();
        } else {

            userModel.findOne({email: req.query.email},

                function(err, result){

                    if(err || result !== null) {
                        return res.redirect('/register');
                    } else {

                        newUser.lname = req.query.lname;
                        newUser.fname = req.query.fname;
                        newUser.email = req.query.email;
                        newUser.password = req.query.password;

                        newUser.save(function(err) {
                            if(err)
                                return next();
                            
                            return res.redirect('/login');
                        });
                    }
                }
            )
        }
    };
};