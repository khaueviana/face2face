var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, { timestamps: true } );

var user = mongoose.model("User", userSchema);
module.exports = user;