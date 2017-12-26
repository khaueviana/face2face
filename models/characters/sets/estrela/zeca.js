var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var zeca = Object.create(Character);
zeca.id = "Cg4OBQEPDgU";
zeca.name = "Zeca";
zeca.gender = c13s.Gender.male;
zeca.face = new c13s.Face(false, false);
zeca.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.blonde, c13s.HairType.curly);
zeca.eyeColor = c13s.EyeColor.brown;
zeca.accessories = [c13s.Accessory.glasses];

module.exports = zeca;