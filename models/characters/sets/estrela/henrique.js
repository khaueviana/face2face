var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var henrique = Object.create(Character);
henrique.id = "DAgPDAkKBAA";
henrique.name = "Henrique";
henrique.gender = c13s.Gender.male;
henrique.face = new c13s.Face(false, false);
henrique.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.blonde, c13s.HairType.straight);
henrique.eyeColor = c13s.EyeColor.brown;
henrique.accessories = [c13s.Accessory.hat];

module.exports = henrique;