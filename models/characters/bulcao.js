var Character = require("./character");
var characteristics = require("./characteristics/");

var bulcao = Object.create(Character);
bulcao.id = 1;
bulcao.name = "Bulcão";
bulcao.gender = characteristics.Gender.male;
bulcao.face = new characteristics.Face(false);
bulcao.hair = new characteristics.Hair(characteristics.HairLength.short, characteristics.HairColor.brown);
bulcao.eyeColor = characteristics.EyeColor.brown;
bulcao.accessories.push(characteristics.Accessory.glasses);

module.exports = bulcao;