var CharacterFrame = require('./../models/pieces/characterFrame');
var BoardCoordinates = require('./../models/pieces/boardCoordinates');
var characters = require("./../models/characters/");
var MathHelper = require("./../helpers/math");

var Board = {
    characterFrames: [],
    misteryFace: {},

    init: function () {
        this.fillCharacterFrames();
        this.chooseRandomFace();
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

    chooseRandomFace: function () {
        this.misteryFace = this.characterFrames[MathHelper.getRandomInt(0, this.characterFrames.length - 1)].character;
    },
};

module.exports = Board;