var BoardCoordinates = function (x, y) {
    this.x = x;
    this.y = y;
};

BoardCoordinates.prototype.toString = function(){
    return this.x + "," + this.y;
};

module.exports = BoardCoordinates;