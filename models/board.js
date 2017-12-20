var CharacterFrame = require('./../models/pieces/characterFrame');
var BoardPosition = require('./../models/pieces/boardPosition');
var characters = require("./../models/characters/");

var Board = {
    characterFrames: [],
    misteryFace: {},

    init: function () {
        this.fillCharacterFrames();
        this.chooseRandomFace();
        return this;
    },

    fillCharacterFrames: function () {
        this.characterFrames.push(new CharacterFrame(characters.bulcao, new BoardPosition(0, 0)));
        this.characterFrames.push(new CharacterFrame(characters.khaue, new BoardPosition(1, 0)));
        this.characterFrames.push(new CharacterFrame(characters.marcelo, new BoardPosition(2, 0)));
        this.characterFrames.push(new CharacterFrame(characters.sampaio, new BoardPosition(3, 0)));
        this.characterFrames.push(new CharacterFrame(characters.vitor, new BoardPosition(4, 0)));
    },

    chooseRandomFace: function () {
        this.misteryFace = this.characterFrames[this.getRandomInt(0, 4)].character;
    },

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

module.exports = Board;