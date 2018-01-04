const mongoose = require('mongoose');
const Question = require('./question');
const Board = require('./board/board');
const FrameStatus = require('./board/frameStatus');
const GameStatus = require('./gameStatus');

var gameSchema = new mongoose.Schema({
    status: { type: Number, required: true },
    winner: { type: String },
    playerOne: {
        userId: { type: String, required: true },
        board: {},
    },
    playerTwo: {
        userId: String,
        board: {},
    },
}, { timestamps: true });

var getQuestionFilter = function (args) {

    var { game, player } = args.gameData;

    var question = Question(args.questionId);

    if (question) {
        var questionProperty = `${player}.${question.property}`;

        var filter = {};
        filter['_id'] = game.id;
        filter[questionProperty] = question.value;

        return { filter: filter, description: question.description };
    }
}

gameSchema.methods.start = function (userId) {

    return Game.count({ 'playerTwo': null, 'playerOne.userId': userId }).then(count => {
        if (count === 0) {
            return Game.findOne({ 'playerTwo': null });
        } else {
            throw Error("Game can't started");
        }
    }).then(game => {
        var board = Object.create(Board).init();

        if (game) {
            game.playerTwo = { userId, board: board };
            game.status = GameStatus.PlayerOneTurn;
            return game.save().then(result => { return { 'gameId': result._id }; }).catch(error => { throw error; });
        } else {
            this.status = GameStatus.New;
            this.playerOne = { userId, board: board };
            return this.save().then(result => { return { 'gameId': result._id }; }).catch(error => { throw error; });
        }
    }, error => { throw error; });;
}

gameSchema.methods.question = function (args) {
    return new Promise(function (resolve, reject) {
        const questionFilter = getQuestionFilter(args);

        if (questionFilter) {
            resolve(questionFilter);
        } else {
            reject(Error("Question not found"));
        }
    }).then(function (questionFilter) {

        var { game, player } = args.gameData;

        if (game.status === GameStatus.Ended) {
            throw new Error("The game does not exist");
        } else if (game.status === GameStatus.isTurn(player)) {
            game.status = GameStatus.getNextTurn(player);
            game.save();

            return Game.findOne(questionFilter.filter).then((response) => {
                return {
                    question: questionFilter.description,
                    answer: (response != undefined && response != null)
                };
            }, (error) => {
                throw error;
            });
        } else {
            throw new Error("It's not your turn!");
        }

    });;
}

gameSchema.methods.tipOff = function (args) {
    var { game, player, opponent } = args.gameData;

    if (game.status === GameStatus.Ended) {
        throw new Error("The game does not exist");
    } else if (game.status === GameStatus.isTurn(player)) {
        var result = game[opponent].board.misteryFace.id === args.characterId;

        if (result) {
            game.winner = game[player].userId;
            game.status = GameStatus.Ended;
        } else {
            game.winner = game[opponent].userId;
            game.status = GameStatus.Ended;
        }

        game.save();

        return result;

    } else {
        throw new Error("It's not your turn!");
    }
}

gameSchema.methods.flip = function (args) {

    var { game, player } = args.gameData;

    if (game.status === GameStatus.Ended) {
        throw new Error("The game does not exist");
    } else {
        var frame = game[player].board.characterFrames.find(function (cf) {
            return cf.character.id === args.characterId;
        });

        if (frame) {
            frame.status = frame.status === FrameStatus.up ? FrameStatus.down : FrameStatus.up;

            game[player].board.characterFrames[0].status = 20;

            return game.save().then(function (result) {
                return result[player];
            });

        } else {
            return false;
        }
    }
}

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;