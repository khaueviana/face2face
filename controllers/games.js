var express = require('express');
var router = express.Router();

var Game = require('../models/game');
var User = require('../models/user');
var Board = require('../models/board/board');
var Question = require('../models/question');

router.get('/', function(req, res, next) {
    Game.find().then(function(games) {
        return res.send(games);
    }).catch(function(e) {
        return res.sendStatus(500);
    });
});

router.post('/start', function(req, res, next) {
    var game = new Game();

    game.start(req.user._id).then(function(game) {
        return res.send(game);
    });
});

router.get('/questions', function(req, res, next) {
    return res.send(Question());
});

router.post('/tipoff', function(req, res, next) {
    var game = new Game();

    game.tipOff({
        gameId: req.body.gameId,
        player: req.body.player,
        characterId: req.body.characterId
    }).then(function(response) {
        return res.send(response);
    }).catch(function(err) {
        return res.sendStatus(500);
    });
});

router.get('/:gameId/questions/:player/:questionId', function(req, res, next) {
    var game = new Game();

    game.question({
        gameId: req.params.gameId,
        player: req.params.player,
        questionId: req.params.questionId
    }).then(response => {
        res.send(response);
    }, (errorResponse) => {
        console.log(errorResponse);
        res.status(500).json({ message: errorResponse.message, stack: errorResponse.stack });
    });
});

module.exports = router;