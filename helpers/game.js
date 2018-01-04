var Game = require('../models/game');

module.exports = function (req, res, next) {

    var gameId = req.params.gameId || req.body.gameId || req.params.id;

    if (gameId) {
        Game.findById(gameId).then((game) => {

            if (game) {
                req.gameData = {
                    game,
                    player: game.playerOne.userId == req.user._id ? "playerOne" : "playerTwo",
                    opponent: game.playerOne.userId == req.user._id ? "playerTwo" : "playerOne"
                }
            }

            next();

        }).catch((error) => { throw error; });
    } else {
        next();
    }

};