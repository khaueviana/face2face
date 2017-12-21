var Character = require("./character");
var characteristics = require("./characteristics/");

var khaue = Object.create(Character);
khaue.id = 3;
khaue.name = "Khauê";
khaue.gender = characteristics.Gender.male;
khaue.face = new characteristics.Face(false, true);
khaue.hair = new characteristics.Hair(characteristics.HairLength.short, characteristics.HairColor.black);
khaue.eyeColor = characteristics.EyeColor.black;
khaue.accessories.push(characteristics.Accessory.chain);

module.exports = khaue;