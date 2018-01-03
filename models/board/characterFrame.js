var FrameStatus = require("./frameStatus");

var CharacterFrame = function (character) {
    this.character = character;
    this.status = FrameStatus.up;
    this.image = `${character.name}.${character.id}.png`;
};

module.exports = CharacterFrame;