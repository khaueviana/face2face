var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var daniel = Object.create(Character);
daniel.id = "BgEPBwECDQ8";
daniel.name = "Edu";
daniel.gender = c13s.Gender.male;
daniel.face = new c13s.Face(true, false);
daniel.hair = new c13s.Hair(c13s.HairLength.bald, c13s.HairColor.black, c13s.HairType.straight);
daniel.eyeColor = c13s.EyeColor.brown;

module.exports = daniel;