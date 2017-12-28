const mongoose = require('mongoose');
const Question = require('./question');

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

gameSchema.methods.getQuestionFilter = function (gameId, playerNumber, questionId) {
    var question = Question(questionId);
    var questionProperty = `${playerNumber}.${question.property}`;
    var filter = {};
    filter["_id"] = gameId;
    filter[questionProperty] = question.value;
    //ToDo: implements a if(Array) to evaluate properties of this kind.
    return { filter: filter, description: question.description };
}

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;