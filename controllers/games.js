var express = require('express');
var router = express.Router();

var Game = require('../models/game');
var User = require('../models/user');

router.get('/', function(req, res, next) {
    Game.find().then(function(games){
        return res.send(games);
    }).catch(function(e) {
        return res.sendStatus(500);
    });
});

router.post('/', function(req, res, next) {

    var idUsuario = '5a3a6b8536cb483f78f05677';
        
    User.findById(idUsuario)
        .then(function(userDb) {
            var game = new Game();
            game.playerOne = {}
            game.playerTwo = {}
                
            game.save().then(function(){
                return res.sendStatus(200);
            }).catch(function(e) {
                return res.sendStatus(500);
            });
        })
        .catch(function(reason){
            return res.sendStatus(500);
        });
});

module.exports = router;
