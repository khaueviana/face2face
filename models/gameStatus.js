var GameStatus = {
    New: 0,
    PlayerOneTurn: 1,
    PlayerTwoTurn: 2,
    Ended: 3,
    isTurn: function (player) {
        if (player === "playerOne")
            return this.PlayerOneTurn;

        return this.PlayerTwoTurn;
    },
    getNextTurn: function (player) {
        if (player === "playerOne")
            return this.PlayerTwoTurn;

        return this.PlayerOneTurn;
    }
};

module.exports = GameStatus;