var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var sonia = Object.create(Character);
sonia.id = "DAIBCQQNDgA";
sonia.name = "Sônia";
sonia.gender = c13s.Gender.female;
sonia.face = new c13s.Face(false, false);
sonia.hair = new c13s.Hair(c13s.HairLength.long, c13s.HairColor.grey, c13s.HairType.straight);
sonia.eyeColor = c13s.EyeColor.brown;

module.exports = sonia;