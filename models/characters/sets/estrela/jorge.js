var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var jorge = Object.create(Character);
jorge.id = "BwELCwMMAwY";
jorge.name = "Jorge";
jorge.gender = c13s.Gender.male;
jorge.face = new c13s.Face(false, false);
jorge.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.grey, c13s.HairType.straight);
jorge.eyeColor = c13s.EyeColor.brown;
jorge.accessories = [c13s.Accessory.hat];

module.exports = jorge;