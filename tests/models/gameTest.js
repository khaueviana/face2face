"use strict";

const chai = require('chai');
const expect = chai.expect;
const Game = require('./../../models/game');
const User = require('./../../models/user');
const Board = require('./../../models/board/board');
const ana = require('./../../models/characters/sets/estrela/ana');
var c13s = require("./../../models/characters/characteristics/");

describe('Game', function () {
    it('Check if Ana has blue eyes', function () {
        const game = new Game();
        const questionFilter = game.getQuestionFilter(1, "playerOne", 17);

        expect(questionFilter.filter._id).to.equal(1);
        expect(questionFilter.description).to.equal("Has blue eyes?");
        expect(questionFilter.filter.hasOwnProperty("playerOne.board.misteryFace.eyeColor")).to.equal(true);

        game.playerOne = new User();
        game.playerOne.board = Object.create(Board).init();
        game.playerOne.board.misteryFace = ana;

        Game.findOne(questionFilter.filter, function (error, foundGame) {
            console.log(foundGame);
            var response = {
                question: questionFilter.description,
                answer: (foundGame != undefined && foundGame != null)
            };
            console.log(response);            
        });
    });
});