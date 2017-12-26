var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var helio = Object.create(Character);
helio.id = "Cg4DBAIPAgA";
helio.name = "Hélio";
helio.gender = c13s.Gender.male;
helio.face = new c13s.Face(false, false);
helio.hair = new c13s.Hair(c13s.HairLength.bald, c13s.HairColor.black, c13s.HairType.curly);
helio.eyeColor = c13s.EyeColor.brown;

module.exports = helio;