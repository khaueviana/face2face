var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var vitor = Object.create(Character);
vitor.id = "AAMHAwIIDA0";
vitor.name = "Vítor";
vitor.gender = c13s.Gender.male;
vitor.face = new c13s.Face(false);
vitor.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.grey, c13s.HairType.straight);
vitor.eyeColor = c13s.EyeColor.black;

module.exports = vitor;