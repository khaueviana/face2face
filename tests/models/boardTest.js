var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Board = require('./../../models/board');

describe('Board', function() {
  it('Bulcão deve estar na coordenada 0,0', function() {
    var board = Object.create(Board).init();
    expect(board.characterFrames[0].character.name).to.equal("Bulcão");
  });
});