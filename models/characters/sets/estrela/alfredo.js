var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var alfredo = Object.create(Character);
alfredo.id = "AQ0DDg0DCgo";
alfredo.name = "Alfredo";
alfredo.gender = c13s.Gender.male;
alfredo.face = new c13s.Face(false, true);
alfredo.hair = new c13s.Hair(c13s.HairLength.long, c13s.HairColor.black, c13s.HairType.straight);
alfredo.eyeColor = c13s.EyeColor.blue;

module.exports = alfredo;