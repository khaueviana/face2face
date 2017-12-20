var pieces = require("./../pieces/index");

var vitor = Object.create(pieces.Character);
vitor.name = "Vítor";
vitor.gender = pieces.Gender.male;
vitor.face = new pieces.Face(false);
vitor.hair = new pieces.Hair(pieces.HairLength.short, pieces.HairColor.grey);
vitor.eyeColor = pieces.EyeColor.black;

module.exports = vitor;