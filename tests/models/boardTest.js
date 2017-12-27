"use strict";

const chai = require('chai');
const expect = chai.expect;
const Board = require('./../../models/board/board');
const FrameStatus = require('./../../models/board/frameStatus');

describe('Board', function () {
  it('Characters must be in correct position', function () {
    const board = Object.create(Board).init();

    expect(board.characterFrames[0].character.name).to.equal("Alfredo");
    expect(board.characterFrames[23].character.name).to.equal("Zeca");
  });

  it('Mistery face should not be equal in both boards all the times', function () {
    let collision = 0;

    for (let i = 1; i <= 100; i++) {
      const boardOne = Object.create(Board).init();
      const boardTwo = Object.create(Board).init();

      if (boardOne.misteryFace === boardTwo.misteryFace) {
        ++collision;
      }

      expect(collision).to.not.equal(100);
    }

    console.log("Mistery face collision: " + collision + "%");
  });

  it('Flip Ana character frame', function () {
    const board = Object.create(Board).init();
    const anaCharacterId = "CQEJBwwCCAY";
    const frame = board.characterFrames.find(function (cf) { return cf.character.id === anaCharacterId; });

    board.flipCharacterFrame(anaCharacterId);
    expect(frame.status).to.equal(FrameStatus.down);

    board.flipCharacterFrame(anaCharacterId);
    expect(frame.status).to.equal(FrameStatus.up);
  });

  it('Counting board character frames', function () {
    const boardOne = Object.create(Board).init();
    const boardTwo = Object.create(Board).init();

    expect(boardOne.characterFrames.length).to.equal(24);
    expect(boardTwo.characterFrames.length).to.equal(24);
  });

  it("Check if flipping a character in one board doesn't flip the same character in the other", function () {
    const boardOne = Object.create(Board).init();
    const boardTwo = Object.create(Board).init();
    const anaCharacterId = "CQEJBwwCCAY";
    const frameInBoardOne = boardOne.characterFrames.find(function (cf) { return cf.character.id === anaCharacterId; });
    const sameFrameInBoardTwo = boardTwo.characterFrames.find(function (cf) { return cf.character.id === anaCharacterId; });

    boardOne.flipCharacterFrame(anaCharacterId);

    expect(frameInBoardOne.status).to.equal(FrameStatus.down);
    expect(sameFrameInBoardTwo.status).to.equal(FrameStatus.up);
  });
});