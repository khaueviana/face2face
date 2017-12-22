var chai = require('chai');
var expect = chai.expect;
var sampaio = require('./../../models/characters/sampaio');
var characteristics = require("./../../models/characters/characteristics/");

describe('Character', function () {
    it('Sampa is a real catch!', function () {
      expect(sampaio.gender).to.equal(characteristics.Gender.male);
      expect(sampaio.face.hasBeard).to.equal(true);
      expect(sampaio.hair.length).to.equal(characteristics.HairLength.short);
      expect(sampaio.hair.color).to.equal(characteristics.HairColor.black);
      expect(sampaio.eyeColor).to.equal(characteristics.EyeColor.black);
      expect(sampaio.accessories).to.include(characteristics.Accessory.chain);
    });
  });