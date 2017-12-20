var pieces = require("./../pieces/index");

var khaue = Object.create(pieces.Character);
khaue.name = "Khauê";
khaue.gender = pieces.Gender.male;
khaue.face = new pieces.Face(false, true);
khaue.hair = new pieces.Hair(pieces.HairLength.short, pieces.HairColor.black);
khaue.eyeColor = pieces.EyeColor.black;
khaue.accessories.push(pieces.Accessory.chain);

module.exports = khaue;