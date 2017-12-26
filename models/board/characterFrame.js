var FrameStatus = require("./frameStatus");

var CharacterFrame = function(character) {
    this.character = character;
    this.status = FrameStatus.up;
};

module.exports = CharacterFrame;