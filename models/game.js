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

gameSchema.methods.start = function (userId) {
    return Game.findOne({ 'playerTwo': null })
        .then(game => {
            var board = Object.create(Board);
            board.init();
            if (game) {
                game.playerTwo = { userId, board: board };
                return game.save().then(result => { return { 'gameId': result._id }; }).catch(error => { throw error; });
            } else {
                this.playerOne = { userId, board: board };
                return this.save().then(result => { return { 'gameId': result._id }; }).catch(error => { throw error; });
            }
        },
        error => { throw error; });
}

gameSchema.methods.getQuestionFilter = function (args) {
    var question = Question(args.questionId);
    var questionProperty = `${args.player}.${question.property}`;

    var filter = {};
    filter["_id"] = args.gameId;
    filter[questionProperty] = question.value;

    return { filter: filter, description: question.description };
}

gameSchema.methods.question = function (args) {
    const questionFilter = gameSchema.methods.getQuestionFilter(args);

    return Game.findOne(questionFilter.filter).then((response) => {
        return {
            question: questionFilter.description,
            answer: (response != undefined && response != null)
        };
    }, (error) => {
        throw error;
    });
}

gameSchema.methods.tipOff = function (args) {
    return Game.findById(args.gameId).then(function (game) {
        if (args.player === "playerOne") {
            return game["playerTwo"].board.misteryFace.id === args.characterId;
        } else {
            return game["playerOne"].board.misteryFace.id === args.characterId;
        }
    });
}

gameSchema.methods.flip = function (args) {
    return Game.findById(args.gameId).then(function (game) {
        const frame = game[args.player].board.characterFrames.find(function (cf) {
            return cf.character.id === args.characterId;
        });

        if (frame) {
            frame.status = frame.status === FrameStatus.up ? FrameStatus.down : FrameStatus.up;

            return game.save().then(function (result) {
                return result[args.player];
            });
        } else {
            return false;
        }
    });
}

gameSchema.methods.getById = function (id, userId) {
    return Game
        .findById(id)
        .then((game) => { 
            if(!game) return null;
            return buildGameResponse(game, userId); 
        })
        .catch((error) => { throw error; });
}

function buildGameResponse(game, userId) {
    return {
        'gameId': game.id,
        'player': game.playerOne.userId === userId ? game.playerOne : game.playerTwo,
        'isPlayerOne': game.playerOne.userId === userId
    };
}

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;