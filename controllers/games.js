var express = require('express');
var router = express.Router();

var Game = require('../models/game');
var User = require('../models/user');
var Board = require('../models/board');

router.get('/', function(req, res, next) {
    Game.find().then(function(games){
        return res.send(games);
    }).catch(function(e) {
        return res.sendStatus(500);
    });
});

router.post('/', function(req, res, next) {
    var game = new Game();

    var boardOne = Object.create(Board);
    boardOne.init();
    
    var boardTwo = Object.create(Board);
    boardTwo.init();
    
    game.playerOne = {};
    game.playerOne.userId = req.body.playerOne.id;
    game.playerOne.board = boardOne;
    game.playerTwo = {}
    game.playerTwo.userId = req.body.playerTwo.id;
    game.playerTwo.board = boardTwo;
        
    game.save().then(function(){
        return res.sendStatus(200);
    }).catch(function(e) {
        return res.sendStatus(500);
    });
        
});

module.exports = router;
