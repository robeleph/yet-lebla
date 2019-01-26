// const User = require('../models/user');
const User = require('../models/models/User');
var jwt = require('jsonwebtoken');
var config = require('../configs/database');

exports.login = function (loginInfo) {
    return new Promise((resolve, reject) => {
        if (!loginInfo.username || !loginInfo.password)
            reject('invalid or missing credential has been provided.');
        else {
            User.findOne({
                username: loginInfo.username
            }, function (err, user) {
                if (err) throw err;

                if (!user) {
                    reject("username doesn't exist");
                } else {
                    console.log("password " + loginInfo.username);
                    // check if password matches
                    user.comparePassword(loginInfo.password, function (err, isMatch) {
                        if (isMatch && !err) {

                            let payload = {
                                firstname: user.firstname,
                                lastname: user.lastname,
                                email: user.email,
                                isAdmin: user.isAdmin
                            }

                            var token = jwt.sign(payload, config.secret);
                            resolve(token);
                        } else {
                            reject("incorrect password");
                        }
                    });
                }
            });

        }

    });
}


exports.register = function (registerInfo) {
    return new Promise((resolve, reject) => {
        if (!registerInfo || !registerInfo.username || !registerInfo.password) {
            reject('invalid data');
        } else {
            User({
                firstname: registerInfo.firstname,
                lastname: registerInfo.lastname,
                email: registerInfo.email,
                username: registerInfo.username,
                password: registerInfo.password,
                recovery_question: registerInfo.recovery_question,
                recovery_answer: registerInfo.recovery_answer
            }).save(function (err) {
                console.log(err);
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        }
    });
}