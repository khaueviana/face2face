var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var chico = Object.create(Character);
chico.id = "Bw4ECQ8OBgw";
chico.name = "Chico";
chico.gender = c13s.Gender.male;
chico.face = new c13s.Face(false, false);
chico.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.black, c13s.HairType.curly);
chico.eyeColor = c13s.EyeColor.brown;

module.exports = chico;