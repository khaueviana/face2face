var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var tony = Object.create(Character);
tony.id = "BQkECAwPDgE";
tony.name = "Tony";
tony.gender = c13s.Gender.male;
tony.face = new c13s.Face(false, false);
tony.hair = new c13s.Hair(c13s.HairLength.bald, c13s.HairColor.black, c13s.HairType.straight);
tony.eyeColor = c13s.EyeColor.blue;

module.exports = tony;