var Board = {
    characterFrames: [],
    theFace: {},

    initialize: function () {
        this.fillCharacterFrames();
        this.chooseRandomFace();
    },

    fillCharacterFrames: function () {
        this.characterFrames.push(new CharacterFrame(bulcao, new BoardPosition(0, 0)));
        this.characterFrames.push(new CharacterFrame(khaue, new BoardPosition(0, 1)));
        this.characterFrames.push(new CharacterFrame(marcelo, new BoardPosition(0, 2)));
        this.characterFrames.push(new CharacterFrame(sampaio, new BoardPosition(0, 3)));
        this.characterFrames.push(new CharacterFrame(vitor, new BoardPosition(0, 4)));
    },

    chooseRandomFace: function () {
        this.theFace = this.characterFrames[this.getRandomInt(0, 4)].character;
    },

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};