const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    firstname: {
        type : String,
        required : true
    },
    lastname : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    recovery_question : {
        type: String,
        required : true
    },
    recovery_answer : {
        type: String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    modified_on: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


module.exports = mongoose.model('User', userSchema);
