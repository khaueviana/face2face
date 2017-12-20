var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({    
    playerOne: {
        userid: Number,
        board: {},
    },
    playerTwo: {
        userid: Number,
        board: {},
    },
}, { timestamps: true });

var games = mongoose.model("Game", gameSchema);
module.exports = games;