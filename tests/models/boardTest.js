var chai = require('chai');
var expect = chai.expect;
var Board = require('./../../models/board/board');
var FrameStatus = require('./../../models/board/frameStatus');

describe('Board', function () {
  it('Characters must be in correct position', function () {
    var board = Object.create(Board).init();

    expect(board.characterFrames[0].character.name).to.equal("Alfredo");
    expect(board.characterFrames[23].character.name).to.equal("Zeca");
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

  it('Flip Ana character frame', function () {
    var board = Object.create(Board).init();
    const anaCharacterId = "CQEJBwwCCAY";
    var frame = board.characterFrames.find(function (cf) { return cf.character.id === anaCharacterId; });

    board.flipCharacterFrame(anaCharacterId);
    expect(frame.status).to.equal(FrameStatus.down);

    board.flipCharacterFrame(anaCharacterId);
    expect(frame.status).to.equal(FrameStatus.up);
  });

  it('Counting board character frames', function () {
    var boardOne = Object.create(Board).init();
    var boardTwo = Object.create(Board).init();

    expect(boardOne.characterFrames.length).to.equal(24);
    expect(boardTwo.characterFrames.length).to.equal(24);
  });

  it("Check if flipping a character in one board doesn't flip the same character in the other", function () {
    var boardOne = Object.create(Board).init();
    var boardTwo = Object.create(Board).init();
    const anaCharacterId = "CQEJBwwCCAY";
    var frameInBoardOne = boardOne.characterFrames.find(function (cf) { return cf.character.id === anaCharacterId; });
    var sameFrameInBoardTwo = boardTwo.characterFrames.find(function (cf) { return cf.character.id === anaCharacterId; });

    boardOne.flipCharacterFrame(anaCharacterId);

    expect(frameInBoardOne.status).to.equal(FrameStatus.down);
    expect(sameFrameInBoardTwo.status).to.equal(FrameStatus.up);
  });
});