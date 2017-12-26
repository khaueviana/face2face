var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var sampaio = Object.create(Character);
sampaio.id = "CgADBQwDAAY";
sampaio.name = "Sampaio";
sampaio.gender = c13s.Gender.male;
sampaio.face = new c13s.Face(true);
sampaio.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.black, c13s.HairType.straight);
sampaio.eyeColor = c13s.EyeColor.black;

module.exports = sampaio;