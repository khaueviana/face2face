var FrameStatus = require("./frameStatus");

var CharacterFrame = function(character, boardPosition) {
    this.character = character;
    this.status = FrameStatus.up;
    this.boardPosition = boardPosition;
};

module.exports = CharacterFrame;