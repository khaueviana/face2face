var express = require('express');
var router = express.Router();

var Game = require('../models/game');
var User = require('../models/user');
var Board = require('../models/board/board');

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
                return res.sendStatus(200);
            }).catch(function (e) {
                return res.sendStatus(500);
            });
        } else {

            var newGame = new Game();
            newGame.playerOne = {
                userId: req.user._id,
                board: board
            };

            newGame.save().then(function () {
                return res.sendStatus(200);
            }).catch(function (e) {
                return res.sendStatus(500);
            });
        }
    });
});

router.post('/question', function (req, res, next) {
    Game.findOne(req.body.filter, function (error, game) {
            return res.send(game);
    });
});

module.exports = router;
