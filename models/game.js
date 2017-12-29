const mongoose = require('mongoose');
const Question = require('./question');
const Board = require('./board/board');
const FrameStatus = require('./board/frameStatus');

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

gameSchema.methods.start = function(userId) {
    return Game.findOne({'playerTwo': null})
    .then(game => {
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
            this.playerOne = {
                userId,
                board: board
            };
            return this.save().then(function(result) {
                return {
                    player: 'playerOne',
                    gameId: result.id
                };
            });
        }
    }, 
    error => { throw error; });
}

gameSchema.methods.getQuestionFilter = function(args) {
    var question = Question(args.questionId);
    var questionProperty = `${args.player}.${question.property}`;

    var filter = {};
    filter["_id"] = args.gameId;
    filter[questionProperty] = question.value;

    return { filter: filter, description: question.description };
}

gameSchema.methods.question = function(args) {
    const questionFilter = gameSchema.methods.getQuestionFilter(args);

    return Game.findOne(questionFilter.filter)
    .then((response) => {
        return {
            question: questionFilter.description,
            answer: (response != undefined && response != null)
        };
    }, (error) => {
        throw error;
    });
}

gameSchema.methods.tipOff = function(args) {
    return Game.findById(args.gameId).then(function(game) {
        return game[args.player].board.misteryFace.id === args.characterId;
    });
}

gameSchema.methods.flip = function(args) {

    return Game.findById(args.gameId).then(function(game) {

        const frame = game[args.player].board.characterFrames.find(function(cf) {
            return cf.character.id === parseInt(args.characterId);
        });

        if (frame) {
            frame.status = frame.status === FrameStatus.up ? FrameStatus.down : FrameStatus.up;

            return game.save().then(function(result) {
                return result;
            });
        } else {
            return false;
        }
    });
}

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;