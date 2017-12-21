var express = require('express');
var router = express.Router();

var Game = require('../models/game');
var User = require('../models/user');
var Board = require('../models/board/board');

var loginRequired = require("./../helpers/loginRequired");

router.get('/', function(req, res, next) {
    Game.find().then(function(games){
        return res.send(games);
    }).catch(function(e) {
        return res.sendStatus(500);
    });
});

router.post('/start', loginRequired, function(req, res, next) {
    var game = new Game();

    var board = Object.create(Board);
    board.init();
    
<<<<<<< HEAD
    Game.findOne({ 'playerTwo' : null}, function(error, game){
=======
    game.playerOne = {
        userId: req.body.playerOne.id,
        board: boardOne,
    };
    game.playerTwo = {
        userId: req.body.playerTwo.id,
        board: boardTwo
    };
>>>>>>> 7268ca289639d74283b447481955130c33d887a9
        
        if(game){
            game.playerTwo = {
                userId : req.user._id,
                board :board
            };
            game.save().then(function(){
                return res.sendStatus(200);
            }).catch(function(e) {
                return res.sendStatus(500);
            });
        }else{

            var newGame = new Game();
            newGame.playerOne = {
                userId : req.user._id,
                board : board
            };

            newGame.save().then(function(){
                return res.sendStatus(200);
            }).catch(function(e) {
                return res.sendStatus(500);
            });
        }
    });
    

    
        
});

module.exports = router;
