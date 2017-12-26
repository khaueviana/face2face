var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var pedro = Object.create(Character);
pedro.id = "BwoMAwwCAAs";
pedro.name = "Pedro";
pedro.gender = c13s.Gender.male;
pedro.face = new c13s.Face(false, false);
pedro.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.grey, c13s.HairType.straight);
pedro.eyeColor = c13s.EyeColor.blue;

module.exports = pedro;