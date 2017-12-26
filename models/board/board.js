var CharacterFrame = require('./characterFrame');
var FrameStatus = require('./frameStatus');
var characters = require("./../../models/characters/sets/estrela/");
var MathHelper = require("./../../helpers/math");

var Board = {
    init: function () {
        this.fillCharacterFrames();
        this.chooseMisteryFace();
        return this;
    },

    fillCharacterFrames: function () {
        this.characterFrames = [];

        for (var property in characters) {
            if (characters.hasOwnProperty(property)) {
                this.characterFrames.push(new CharacterFrame(characters[property]));
            }
        }
    },

    chooseMisteryFace: function () {
        this.misteryFace = this.characterFrames[MathHelper.getRandomInt(0, this.characterFrames.length - 1)].character;
    },

    flipCharacterFrame: function (characterId) {
        var frame = this.characterFrames.find(function (cf) { return cf.character.id === characterId; });

        frame.status = frame.status == FrameStatus.up ? FrameStatus.down : FrameStatus.up;
    }
};

module.exports = Board;