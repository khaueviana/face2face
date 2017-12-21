var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({    
    playerOne: {
        userId: { type: String, required: true },
        board: {},
    },
    playerTwo: {
        userId: String,
        board: {},
    },
}, { timestamps: true });

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;