var Character = require("./character");
var characteristics = require("./characteristics/");

var marcelo = Object.create(Character);
marcelo.id = 4;
marcelo.name = "Marcelo";
marcelo.gender = characteristics.Gender.male;
marcelo.face = new characteristics.Face(false);
marcelo.hair = new characteristics.Hair(characteristics.HairLength.short, characteristics.HairColor.black);
marcelo.eyeColor =characteristics.EyeColor.black;
marcelo.accessories.push(characteristics.Accessory.glasses);

module.exports = marcelo;