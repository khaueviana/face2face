var Character = require("./../../character");
var c13s = require("./../../characteristics/");

var lucia = Object.create(Character);
lucia.id = "BwICDAEBDAk";
lucia.name = "Lúcia";
lucia.gender = c13s.Gender.female;
lucia.face = new c13s.Face(false, false);
lucia.hair = new c13s.Hair(c13s.HairLength.long, c13s.HairColor.blonde, c13s.HairType.straight);
lucia.eyeColor = c13s.EyeColor.blue;
lucia.accessories = [c13s.Accessory.hairLace];

module.exports = lucia;