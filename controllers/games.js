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
    game.start(req.user._id)
    .then( game => res.send(game))
    .catch(error => res.status(500).json({message : error.message, stack : error.stack}));    
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

router.post('/flip', function(req, res, next) {
    var game = new Game();

    game.flip({
        gameId: req.body.gameId,
        characterId: req.body.characterId,
        player: req.body.player
    }).then(function(result) {
        return res.send(result);
    });
});

module.exports = router;