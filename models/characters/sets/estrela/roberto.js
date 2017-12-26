var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var roberto = Object.create(Character);
roberto.id = "Bw8DCAILBQI";
roberto.name = "Roberto";
roberto.gender = c13s.Gender.male;
roberto.face = new c13s.Face(false, true);
roberto.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.brown, c13s.HairType.straight);
roberto.eyeColor = c13s.EyeColor.blue;

module.exports = roberto;