var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var daniel = Object.create(Character);
daniel.id = "AggJDwgGCQ4";
daniel.name = "Daniel";
daniel.gender = c13s.Gender.male;
daniel.face = new c13s.Face(true, true);
daniel.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.blonde, c13s.HairType.straight);
daniel.eyeColor = c13s.EyeColor.brown;

module.exports = daniel;