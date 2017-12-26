var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var ana = Object.create(Character);
ana.id = "CQEJBwwCCAY";
ana.name = "Ana";
ana.gender = c13s.Gender.female;
ana.face = new c13s.Face(false, false);
ana.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.black, c13s.HairType.curly);
ana.eyeColor = c13s.EyeColor.brown;
ana.accessories = [c13s.Accessory.earRings];

module.exports = ana;