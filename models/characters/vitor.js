var Character = require("./character");
var characteristics = require("./characteristics/");

var vitor = Object.create(Character);
vitor.id = 6;
vitor.name = "Vítor";
vitor.gender = characteristics.Gender.male;
vitor.face = new characteristics.Face(false);
vitor.hair = new characteristics.Hair(characteristics.HairLength.short, characteristics.HairColor.grey);
vitor.eyeColor = characteristics.EyeColor.black;

module.exports = vitor;