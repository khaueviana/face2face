var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var maria = Object.create(Character);
maria.id = "DwMJBQoPAwU";
maria.name = "Maria";
maria.gender = c13s.Gender.female;
maria.face = new c13s.Face(false, false);
maria.hair = new c13s.Hair(c13s.HairLength.long, c13s.HairColor.brown, c13s.HairType.straight);
maria.eyeColor = c13s.EyeColor.brown;
maria.accessories = [c13s.Accessory.hat];

module.exports = maria;