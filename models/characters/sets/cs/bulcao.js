var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var bulcao = Object.create(Character);
bulcao.id = "AAsJDAkOBg8";
bulcao.name = "Bulcão";
bulcao.gender = c13s.Gender.male;
bulcao.face = new c13s.Face(false);
bulcao.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.brown, c13s.HairType.straight);
bulcao.eyeColor = c13s.EyeColor.brown;
bulcao.accessories = [c13s.Accessory.glasses];

module.exports = bulcao;