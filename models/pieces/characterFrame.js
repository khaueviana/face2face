var FrameStatus = require("./frameStatus");

var CharacterFrame = function(character, boardCoordinates) {
    this.character = character;
    this.status = FrameStatus.up;
    this.boardCoordinates = boardCoordinates;
};

module.exports = CharacterFrame;