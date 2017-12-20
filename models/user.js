var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, { timestamps: true } );

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model("User", userSchema);

module.exports = User;