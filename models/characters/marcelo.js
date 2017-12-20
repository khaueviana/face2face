var pieces = require("./../pieces/index");

var marcelo = Object.create(pieces.Character);
marcelo.name = "Marcelo";
marcelo.gender = pieces.Gender.male;
marcelo.face = new pieces.Face(false);
marcelo.hair = new pieces.Hair(pieces.HairLength.short, pieces.HairColor.black);
marcelo.eyeColor =pieces.EyeColor.black;
marcelo.accessories.push(pieces.Accessory.glasses);

module.exports = marcelo;