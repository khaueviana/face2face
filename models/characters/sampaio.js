var pieces = require("./../pieces/index");

var sampaio = Object.create(pieces.Character);
sampaio.name = "Sampaio";
sampaio.gender = pieces.Gender.male;
sampaio.face = new pieces.Face(true);
sampaio.hair = new pieces.Hair(pieces.HairLength.short, pieces.HairColor.black);
sampaio.eyeColor = pieces.EyeColor.black;
sampaio.accessories.push(pieces.Accessory.chain);

module.exports = sampaio;