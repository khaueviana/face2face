var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, { timestamps: true });

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.insert = function(args) {
    this.username = args.username;
    this.email = args.email;
    this.password = bcrypt.hashSync(args.password, 10);

    return this.save().then(function() {
        return true;
    }).catch(function(e) {
        return false;
    });
}

userSchema.methods.signin = function(args) {
    return User.findOne({ username: args.username }).then(function(user) {
        if (!user) {
            return {
                isSuccess: false,
                message: 'Authentication failed. Wrong User or Password.'
            };
        } else if (user) {
            if (!user.comparePassword(args.password)) {
                return {
                    isSuccess: false,
                    message: 'Authentication failed. Wrong User or Password.'
                };
            } else {
                return {
                    isSuccess: true,
                    token: jwt.sign({ email: user.email, username: user.username, _id: user._id }, 'RESTFULAPIs')
                };
            }
        }
    });
}

userSchema.methods.update = function(args) {
    this._id = args._id;
    this.username = args.username;
    this.email = args.email;
    this.password = bcrypt.hashSync(args.password, 10);

    return User.findByIdAndUpdate(args._id, this).then(function(user) {
        return user;
    });
}

var User = mongoose.model('User', userSchema);

module.exports = User;