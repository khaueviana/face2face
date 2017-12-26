var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var paulo = Object.create(Character);
paulo.id = "Cw0ABgQFCgU";
paulo.name = "Paulo";
paulo.gender = c13s.Gender.male;
paulo.face = new c13s.Face(false, false);
paulo.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.grey, c13s.HairType.straight);
paulo.eyeColor = c13s.EyeColor.brown;
paulo.accessories = [c13s.Accessory.glasses];

module.exports = paulo;