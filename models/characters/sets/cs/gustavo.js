var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var gustavo = Object.create(Character);
gustavo.id = "BwYABgEBCAk";
gustavo.name = "Gustavo";
gustavo.gender = c13s.Gender.male;
gustavo.face = new c13s.Face(true);
gustavo.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.brown, c13s.HairType.straight);
gustavo.eyeColor = c13s.EyeColor.brown;
gustavo.accessories = [c13s.Accessory.glasses];

module.exports = gustavo;