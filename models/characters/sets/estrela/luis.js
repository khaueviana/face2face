var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var luis = Object.create(Character);
luis.id = "BQwBCg4NBw8";
luis.name = "Luís";
luis.gender = c13s.Gender.male;
luis.face = new c13s.Face(false, true);
luis.hair = new c13s.Hair(c13s.HairLength.short, c13s.HairColor.black, c13s.HairType.curly);
luis.eyeColor = c13s.EyeColor.brown;

module.exports = luis;