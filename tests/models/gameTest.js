"use strict";

const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;

const Game = require('./../../models/game');
const User = require('./../../models/user');
const Board = require('./../../models/board/board');
const ana = require('./../../models/characters/sets/estrela/ana');
const c13s = require("./../../models/characters/characteristics/");
const Charact = require("./../../models/characters/characteristic");
const Question = require('./../../models/question');

describe('Database integration tests', function () {
    before(function (done) {
        const credentials = "face2face:sohosarrombados";
        const host1 = "concrete-shard-00-00-tnis6.mongodb.net:27017"
        const host2 = "concrete-shard-00-01-tnis6.mongodb.net:27017";
        const host3 = "concrete-shard-00-02-tnis6.mongodb.net:27017";
        const databaseName = "face2faceTest";
        const options = "ssl=true&replicaSet=concrete-shard-0&authSource=admin";

        mongoose.connect(`mongodb://${credentials}@${host1},${host2},${host3}/${databaseName}?${options}`, { useMongoClient: true });
        mongoose.Promise = global.Promise;

        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error'));

        db.once('open', function () {
            console.log(`Connected to test database (${db.name})!`);
            done();
        });
    });

    describe('Test game collection', function () {
        var gameId = 0;

        it('New game saved to test database', function (done) {
            var game = new Game();
            var user = new User();

            game.playerOne = user;
            game.playerOne.userId = user._id;
            game.playerOne.board = Object.create(Board).init();
            game.playerOne.board.misteryFace = ana;
            gameId = game._id;

            game.save(done);
        });

        it('Find game by id', function (done) {
            Game.findById(gameId).then(function (game) {
                expect(game.playerOne.board.misteryFace.name).to.equal("Ana");
                done();
            });
        });

        it('Find game by filter', function (done) {
            const game = new Game();
            const questionArgs = { gameId: gameId, player: "playerOne", questionId: Charact.brownEyes };
            const questionFilter = game.getQuestionFilter(questionArgs);

            Game.findOne(questionFilter.filter).then(function (foundGame) {
                expect(foundGame.playerOne.board.misteryFace.eyeColor).to.equal(c13s.EyeColor.brown);
                done();
            });
        });

        it('Find game by question', function (done) {
            const game = new Game();
            const questionArgs = { gameId: gameId, player: "playerOne", questionId: Charact.brownEyes };

            game.question(questionArgs).then(function (response) {
                expect(response.question).to.equal(Question(Charact.brownEyes).description);
                expect(response.answer).to.equal(true);
                done(); 
            });
        });

        it('Find game by a question that is an accessory', function (done) {
            const game = new Game();
            const questionArgs = { gameId: gameId, player: "playerOne", questionId: Charact.earrings };

            game.question(questionArgs).then(function (response) {
                expect(response.question).to.equal(Question(Charact.earrings).description);
                expect(response.answer).to.equal(true);
                done();
            });
        });

        it("Don't find game if asked a wrong question", function (done) {
            const game = new Game();
            const questionArgs = { gameId: gameId, player: "playerOne", questionId: Charact.brownHair };

            game.question(questionArgs).then(function (response) {
                expect(response.question).to.equal(Question(Charact.brownHair).description);
                expect(response.answer).to.equal(false);
                done();
            });
        });           
    });

    after(function (done) {
        mongoose.connection.db.dropDatabase(function () {
            console.log("Test database dropped!");
            mongoose.connection.close(done);
        });
    });
});