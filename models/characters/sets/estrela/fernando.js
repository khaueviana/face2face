var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var fernando = Object.create(Character);
fernando.id = "DwELCQsADws";
fernando.name = "Fernando";
fernando.gender = c13s.Gender.male;
fernando.face = new c13s.Face(true, false);
fernando.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.black, c13s.HairType.curly);
fernando.eyeColor = c13s.EyeColor.brown;

module.exports = fernando;