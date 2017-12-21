var pieces = require("./../pieces/");

var gustavo = Object.create(pieces.Character);
gustavo.name = "Gustavo";
gustavo.gender = pieces.Gender.male;
gustavo.face = new pieces.Face(true);
gustavo.hair = new pieces.Hair(pieces.HairLength.short, pieces.HairColor.brown);
gustavo.eyeColor = pieces.EyeColor.brown;
gustavo.accessories.push(pieces.Accessory.glasses);

module.exports = gustavo;