var Character = require("./character");
var characteristics = require("./characteristics/");

var sampaio = Object.create(Character);
sampaio.id = 5;
sampaio.name = "Sampaio";
sampaio.gender = characteristics.Gender.male;
sampaio.face = new characteristics.Face(true);
sampaio.hair = new characteristics.Hair(characteristics.HairLength.short, characteristics.HairColor.black);
sampaio.eyeColor = characteristics.EyeColor.black;
sampaio.accessories.push(characteristics.Accessory.chain);

module.exports = sampaio;