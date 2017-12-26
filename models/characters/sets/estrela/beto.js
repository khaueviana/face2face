var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var beto = Object.create(Character);
beto.id = "AQUOBQEHDQA";
beto.name = "Beto";
beto.gender = c13s.Gender.male;
beto.face = new c13s.Face(false, false);
beto.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.brown, c13s.HairType.straight);
beto.eyeColor = c13s.EyeColor.brown;
beto.accessories = [c13s.Accessory.hat];

module.exports = beto;