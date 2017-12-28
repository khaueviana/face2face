var express = require('express');
var router = express.Router();

var Game = require('../models/game');
var User = require('../models/user');
var Board = require('../models/board/board');
var Question = require('../models/question');

router.get('/', function (req, res, next) {
    Game.find().then(function (games) {
        return res.send(games);
    }).catch(function (e) {
        return res.sendStatus(500);
    });
});

router.post('/start', function (req, res, next) {

    Game.findOne({ 'playerTwo': null }, function (error, game) {
        var board = Object.create(Board);
        board.init();

        if (game) {
            game.playerTwo = {
                userId: req.user._id,
                board: board
            };
            game.save().then(function () {
                return res.send({ player: 'playerTwo', gameId: game.id });
            }).catch(function (e) {
                return res.sendStatus(500);
            });
        } else {

            var newGame = new Game();
            newGame.playerOne = {
                userId: req.user._id,
                board: board
            };

            newGame.save().then(function (result) {
                return res.send({ player: 'playerOne', gameId: result.id });
            }).catch(function (e) {
                return res.sendStatus(500);
            });
        }
    });
});


router.get('/questions', function (req, res, next) {
    return res.send(Question.questions);
});

// Example: /games/5a3c17ec0863ed309867d640/questions/playerOne/2
router.get('/:gameid/questions/:player/:questionId', function (req, res, next) {
    const questionFilter = Game.getQuestionFilter();

    Game.findOne(questionFilter.filter, function (error, game) {
        var response = {
            question: questionFilter.description,
            answer: (game != undefined && game != null)
        };
        return res.send(response);
    });
});

module.exports = router;