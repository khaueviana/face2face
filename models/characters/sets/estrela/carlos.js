var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var carlos = Object.create(Character);
carlos.id = "AQANCgUGBwo";
carlos.name = "Carlos";
carlos.gender = c13s.Gender.male;
carlos.face = new c13s.Face(false, true);
carlos.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.blonde, c13s.HairType.straight);
carlos.eyeColor = c13s.EyeColor.brown;
carlos.accessories = [c13s.Accessory.hat];

module.exports = carlos;