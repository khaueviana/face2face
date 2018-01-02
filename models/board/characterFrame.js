var FrameStatus = require("./frameStatus");

var CharacterFrame = function(character) {
    this.character = character;
    this.status = FrameStatus.up;
    this.image = "Alfredo.AQ0DDg0DCgo.png";
};

module.exports = CharacterFrame;