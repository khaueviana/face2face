var Character = require("./character");
var characteristics = require("./characteristics/");

var gustavo = Object.create(Character);
gustavo.id   = 2;
gustavo.name = "Gustavo";
gustavo.gender = characteristics.Gender.male;
gustavo.face = new characteristics.Face(true);
gustavo.hair = new characteristics.Hair(characteristics.HairLength.short, characteristics.HairColor.brown);
gustavo.eyeColor = characteristics.EyeColor.brown;
gustavo.accessories.push(characteristics.Accessory.glasses);

module.exports = gustavo;