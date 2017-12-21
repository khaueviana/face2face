var express = require('express');
var router = express.Router();

var Game = require('../models/game');
var User = require('../models/user');
var Board = require('../models/board/board');

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
    
    game.playerOne = {
        userId: req.body.playerOne.id,
        board: boardOne,
    };
    game.playerTwo = {
        userId: req.body.playerTwo.id,
        board: boardTwo
    };
        
    game.save().then(function(){
        return res.sendStatus(200);
    }).catch(function(e) {
        return res.sendStatus(500);
    });
        
});

module.exports = router;
