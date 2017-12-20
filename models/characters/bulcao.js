var Character = require("./../pieces/character");
var Gender = require("./../pieces/gender");
var Face = require("./../pieces/face");
var Hair = require("./../pieces/hair");
var HairLength = require("./../pieces/hairLength");
var HairColor = require("./../pieces/hairColor");
var EyeColor = require("./../pieces/eyeColor");
var Accessory = require("./../pieces/accessory");

var bulcao = Object.create(Character);
bulcao.name = "Bulcão";
bulcao.gender = Gender.male;
bulcao.face = new Face(false);
bulcao.hair = new Hair(HairLength.short, HairColor.brown);
bulcao.eyeColor = EyeColor.brown;
bulcao.accessories.push(Accessory.glasses);

module.exports = bulcao;