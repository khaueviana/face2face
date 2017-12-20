var chai = require('chai');
var expect = chai.expect;
var Board = require('./../../models/board');

describe('Board', function () {
  it('Characters must be in correct position', function () {
    var board = Object.create(Board).init();

    expect(board.characterFrames[0].character.name).to.equal("Bulcão");
    expect(board.characterFrames[1].character.name).to.equal("Khauê");
    expect(board.characterFrames[2].character.name).to.equal("Marcelo");
    expect(board.characterFrames[3].character.name).to.equal("Sampaio");
    expect(board.characterFrames[4].character.name).to.equal("Vítor");
  });

  it('Mistery face should not be equal in both boards all the times', function () {
    var collision = 0;

    for (let i = 1; i <= 100; i++) {
      var boardOne = Object.create(Board).init();
      var boardTwo = Object.create(Board).init();

      if (boardOne.misteryFace.name == boardTwo.misteryFace.name) {
        ++collision;
      }

      expect(collision).to.not.equal(100);
    }
    console.log("Mistery face collision: " + collision + "%");
  });
});