var chai = require('chai');
var expect = chai.expect;
var Board = require('./../../models/board/board');
var FrameStatus = require('./../../models/board/frameStatus');

describe('Board', function () {
  it('Characters must be in correct position', function () {
    var board = Object.create(Board).init();

    expect(board.characterFrames[0].character.name).to.equal("Bulcão");
    expect(board.characterFrames[0].boardCoordinates.toString()).to.equal("0,0");

    expect(board.characterFrames[1].character.name).to.equal("Khauê");
    expect(board.characterFrames[1].boardCoordinates.toString()).to.equal("1,0");

    expect(board.characterFrames[2].character.name).to.equal("Marcelo");
    expect(board.characterFrames[2].boardCoordinates.toString()).to.equal("2,0");

    expect(board.characterFrames[3].character.name).to.equal("Sampaio");
    expect(board.characterFrames[3].boardCoordinates.toString()).to.equal("0,1");

    expect(board.characterFrames[4].character.name).to.equal("Vítor");
    expect(board.characterFrames[4].boardCoordinates.toString()).to.equal("1,1");

    expect(board.characterFrames[5].character.name).to.equal("Gustavo");
    expect(board.characterFrames[5].boardCoordinates.toString()).to.equal("2,1");
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

  it('Flip Sampaio character frame', function () {
    var board = Object.create(Board).init();
    const sampaioCharacterId = 5;
    var frame = board.characterFrames.find(function (cf) { return cf.character.id === sampaioCharacterId; });

    board.flipCharacterFrame(sampaioCharacterId);

    expect(frame.status).to.equal(FrameStatus.down);

    board.flipCharacterFrame(sampaioCharacterId);

    expect(frame.status).to.equal(FrameStatus.up);
  });
});