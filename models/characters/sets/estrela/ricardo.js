var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var ricardo = Object.create(Character);
ricardo.id = "CAkBAw8DDwk";
ricardo.name = "Ricardo";
ricardo.gender = c13s.Gender.male;
ricardo.face = new c13s.Face(true, true);
ricardo.hair = new c13s.Hair(c13s.HairLength.bald, c13s.HairColor.brown, c13s.HairType.straight);
ricardo.eyeColor = c13s.EyeColor.brown;

module.exports = ricardo;