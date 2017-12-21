var CharacterFrame = require('./characterFrame');
var BoardCoordinates = require('./boardCoordinates');
var FrameStatus = require('./frameStatus');
var characters = require("./../../models/characters/");
var MathHelper = require("./../../helpers/math");

var Board = {
    characterFrames: [],
    misteryFace: {},

    init: function () {
        this.fillCharacterFrames();
        this.chooseMisteryFace();
        return this;
    },

    fillCharacterFrames: function () {
        this.characterFrames.push(new CharacterFrame(characters.bulcao, new BoardCoordinates(0, 0)));
        this.characterFrames.push(new CharacterFrame(characters.khaue, new BoardCoordinates(1, 0)));
        this.characterFrames.push(new CharacterFrame(characters.marcelo, new BoardCoordinates(2, 0)));
        this.characterFrames.push(new CharacterFrame(characters.sampaio, new BoardCoordinates(0, 1)));
        this.characterFrames.push(new CharacterFrame(characters.vitor, new BoardCoordinates(1, 1)));
        this.characterFrames.push(new CharacterFrame(characters.gustavo, new BoardCoordinates(2, 1)));
    },

    chooseMisteryFace: function () {
        this.misteryFace = this.characterFrames[MathHelper.getRandomInt(0, this.characterFrames.length - 1)].character;
    },

    flipCharacterFrame: function(id){
        var frame = this.characterFrames.find(function (cf) { return cf.character.id === 5; });

        frame.status = frame.status == FrameStatus.up ? FrameStatus.down : FrameStatus.up;
    }
};

module.exports = Board;