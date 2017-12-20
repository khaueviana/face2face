var pieces = require("./../pieces/");

var bulcao = Object.create(pieces.Character);
bulcao.name = "Bulcão";
bulcao.gender = pieces.Gender.male;
bulcao.face = new pieces.Face(false);
bulcao.hair = new pieces.Hair(pieces.HairLength.short, pieces.HairColor.brown);
bulcao.eyeColor = pieces.EyeColor.brown;
bulcao.accessories.push(pieces.Accessory.glasses);

module.exports = bulcao;