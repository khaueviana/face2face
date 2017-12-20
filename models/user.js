var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, { timestamps: true } );

mongoose.model("User", userSchema);