var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var khaue = Object.create(Character);
khaue.id = "BAAIBQENCQk";
khaue.name = "Khauê";
khaue.gender = c13s.Gender.male;
khaue.face = new c13s.Face(false, false);
khaue.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.black, c13s.HairType.straight);
khaue.eyeColor = c13s.EyeColor.black;
khaue.accessories = [c13s.Accessory.chain];

module.exports = khaue;