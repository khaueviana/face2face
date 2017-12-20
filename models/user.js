var mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, { timestamps: true } );

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

var user = mongoose.model("User", userSchema);
module.exports = user;