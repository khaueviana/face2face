const mongoose = require('mongoose');
const Question = require('./question');
const Board = require('./board/board');
const FrameStatus = require('./board/frameStatus');
const GameStatus = require('./gameStatus');

var gameSchema = new mongoose.Schema({
    status: { type: Number },
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
    var question = Question(args.questionId);

    if (question) {
        var questionProperty = `${args.player}.${question.property}`;

        var filter = {};
        filter['_id'] = args.gameId;
        filter[questionProperty] = question.value;

        return { filter: filter, description: question.description };
    }
}

var buildGameResponse = function (game, isPlayerOne = true) {
    return {
        'gameId': game.id,
        'player': (isPlayerOne) ? game.playerOne : game.playerTwo,
        'isPlayerOne': isPlayerOne
    };
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
            return game.save().then(result => buildGameResponse(result, false));
        } else {
            this.status = GameStatus.New;
            this.playerOne = { userId, board: board };
            return this.save().then(result => buildGameResponse(result));
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
        return Game.findById(args.gameId).then((game) => {
            if (game.status === GameStatus.Ended) {
                throw new Error("The game does not exist");
            } else if (game.status === GameStatus.isTurn(args.player)) {
                game.status = GameStatus.getNextTurn(args.player);
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
        }, (error) => {

        });

    });;
}

gameSchema.methods.tipOff = function (args) {
    return Game.findById(args.gameId).then(function (game) {
        if (game.status === GameStatus.Ended) {
            throw new Error("The game does not exist");
        } else if (game.status === GameStatus.isTurn(args.player)) {
            var currentOpponent = args.player === "playerOne" ? "playerTwo" : "playerOne";
            var result = game[currentOpponent].board.misteryFace.id === args.characterId;

            if (result) {
                game.status = GameStatus.Ended;
            } else {
                game.status = GameStatus.getNextTurn(args.player);
            }

            game.save();

            return result;

        } else {
            throw new Error("It's not your turn!");
        }
    });
}

gameSchema.methods.flip = function (args) {
    return Game.findById(args.gameId).then(function (game) {
        if (game.status === GameStatus.Ended) {
            throw new Error("The game does not exist");
        } else {
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
        }
    });
}

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;