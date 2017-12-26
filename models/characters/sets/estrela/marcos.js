var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var marcos = Object.create(Character);
marcos.id = "Bg8HBQQECQo";
marcos.name = "Marcos";
marcos.gender = c13s.Gender.male;
marcos.face = new c13s.Face(false, true);
marcos.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.brown, c13s.HairType.curly);
marcos.eyeColor = c13s.EyeColor.brown;

module.exports = marcos;