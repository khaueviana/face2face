var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var joao = Object.create(Character);
joao.id = "Cw0AAgMFAQw";
joao.name = "João";
joao.gender = c13s.Gender.male;
joao.face = new c13s.Face(false, false);
joao.hair = new c13s.Hair(c13s.HairLength.bald, c13s.HairColor.grey, c13s.HairType.straight);
joao.eyeColor = c13s.EyeColor.brown;
joao.accessories = [c13s.Accessory.glasses];

module.exports = joao;