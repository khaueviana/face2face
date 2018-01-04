var express = require('express');
var router = express.Router();

var Game = require('../models/game');
var User = require('../models/user');
var Board = require('../models/board/board');
var Question = require('../models/question');
var gameHelper = require('../helpers/game');

router.get('/', function (req, res, next) {
    Game.find().then(function (games) {
        return res.send(games);
    }).catch(function (e) {
        return res.sendStatus(500);
    });
});

router.post('/start', function (req, res, next) {
    var game = new Game();
    game.start(req.user._id)
        .then(game => res.send(game))
        .catch(error => res.status(500).json({ message: error.message, stack: error.stack }));
});

router.get('/questions', function (req, res, next) {
    return res.send(Question());
});

router.post('/tipoff', gameHelper, function (req, res, next) {
    var game = new Game();

    try {
        var response = game.tipOff({
            gameData: req.gameData,
            characterId: req.body.characterId
        });

        res.send(response);
    } catch (error) {
        res.status(500).json({ message: error.message, stack: error.stack });
    }

});

router.get('/:gameId/questions/:questionId', gameHelper, function (req, res, next) {
    var game = new Game();

    game.question({
        gameData: req.gameData,
        questionId: req.params.questionId
    }).then(response => {
        res.send(response);
    }, (errorResponse) => {
        console.log(errorResponse);
        res.status(500).json({ message: errorResponse.message, stack: errorResponse.stack });
    });
});

router.post('/flip', gameHelper, function (req, res, next) {
    var game = new Game();

    game.flip({
        gameData: req.gameData,
        characterId: req.body.characterId
    }).then(response => {
        res.send(response);
    }, (errorResponse) => {
        console.log(errorResponse);
        res.status(500).json({ message: errorResponse.message, stack: errorResponse.stack });
    });
});

router.get('/:id', gameHelper, function (req, res, next) {
    res.send(req.gameData.game[req.gameData.player]);
});

router.post('/end', gameHelper, function (req, res, next) {
    var game = new Game();

    game.end({
        gameData: req.gameData
    }).then(response => {
        res.send(response);
    }, (errorResponse) => {
        console.log(errorResponse);
        res.status(500).json({ message: errorResponse.message, stack: errorResponse.stack });
    });
});

module.exports = router;