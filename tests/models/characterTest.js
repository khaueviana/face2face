var chai = require('chai');
var expect = chai.expect;
var sampaio = require('./../../models/characters/sets/cs/sampaio');
var c13s = require("./../../models/characters/characteristics/");

describe('Character', function () {
  it('Sampa is a real catch!', function () {
    expect(sampaio.gender).to.equal(c13s.Gender.male);
    expect(sampaio.face.hasBeard).to.equal(true);
    expect(sampaio.hair.length).to.equal(c13s.HairLength.short);
    expect(sampaio.hair.color).to.equal(c13s.HairColor.black);
    expect(sampaio.eyeColor).to.equal(c13s.EyeColor.black);
  });
});