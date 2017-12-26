var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var marcelo = Object.create(Character);
marcelo.id = "DQ0PBwQICgQ";
marcelo.name = "Marcelo";
marcelo.gender = c13s.Gender.male;
marcelo.face = new c13s.Face(false);
marcelo.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.black, c13s.HairType.straight);
marcelo.eyeColor = c13s.EyeColor.black;
marcelo.accessories = [c13s.Accessory.glasses];

module.exports = marcelo;