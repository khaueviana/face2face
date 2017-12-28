const mongoose = require('mongoose');
const Question = require('./question');
const Board = require('./board/board');

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

gameSchema.methods.findAll = function() {
    return Game.find().then(function(games) {
        return games;
    });
}

gameSchema.methods.start = function(userId) {
    return Game.findOne({
        'playerTwo': null
    }).then(function(game) {

        var board = Object.create(Board);
        board.init();

        if (game) {

            game.playerTwo = {
                userId,
                board: board
            };

            return game.save().then(function() {
                return {
                    player: 'playerTwo',
                    gameId: game.id
                };
            });

        } else {

            var newGame = new Game();

            newGame.playerOne = {
                userId,
                board: board
            };

            return newGame.save().then(function(result) {
                return {
                    player: 'playerOne',
                    gameId: result.id
                };
            });
        }
    });
}

gameSchema.methods.getQuestionFilter = function(args) {
    var question = Question(args.questionId);
    var questionProperty = `${args.player}.${question.property}`;
    var filter = {};
    filter["_id"] = args.gameId;
    filter[questionProperty] = question.value;
    //ToDo: implements a if(Array) to evaluate properties of this kind.
    return { filter: filter, description: question.description };
}

gameSchema.methods.question = function(args) {
    const questionFilter = gameSchema.methods.getQuestionFilter(args);

    return Game.findOne(questionFilter.filter).then(function(game) {
        var response = {
            question: questionFilter.description,
            answer: (game != undefined && game != null)
        };
        return response;
    });
}

gameSchema.methods.tipOff = function(args) {
    return Game.findById(args.gameId).then(function(game) {
        if (args.player === "playerOne") {
            return game.playerTwo.board.misteryFace.id === args.characterId;
        } else {
            return game.playerOne.board.misteryFace.id === args.characterId;
        }
    });
}

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;