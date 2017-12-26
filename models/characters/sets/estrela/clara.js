var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var clara = Object.create(Character);
clara.id = "DgMCDAIABQk";
clara.name = "Clara";
clara.gender = c13s.Gender.female;
clara.face = new c13s.Face(false, false);
clara.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.black, c13s.HairType.straight);
clara.eyeColor = c13s.EyeColor.brown;
clara.accessories = [c13s.Accessory.glasses, c13s.Accessory.hat];

module.exports = clara;