const c13s = require("./characters/characteristics/");
const Charact = require("./characters/characteristic");

module.exports = function (id) {
    const propertyPrefix = 'board.misteryFace.';

    const questions = [
        {
            id: Charact.man,
            description: "It's a man?",
            property: "gender",
            value: c13s.Gender.male
        },
        {
            id: Charact.woman,
            description: "It's a woman?",
            property: "gender",
            value: c13s.Gender.female
        },
        {
            id: Charact.beard,
            description: "Has beard?",
            property: "face.hasBeard",
            value: true
        },
        {
            id: Charact.mustache,
            description: "Has mustache?",
            property: "face.hasMustache",
            value: true
        },
        {
            id: Charact.bald,
            description: "It's bald?",
            property: "hair.length",
            value: c13s.HairLength.bald
        },
        {
            id: Charact.shortHair,
            description: "Has short hair?",
            property: "hair.length",
            value: c13s.HairLength.short
        },
        {
            id: Charact.longHair,
            description: "Has long hair?",
            property: "hair.length",
            value: c13s.HairLength.long
        },
        {
            id: Charact.blackHair,
            description: 'Has black hair?',
            property: 'hair.color',
            value: c13s.HairColor.black
        },
        {
            id: Charact.brownHair,
            description: 'Has brown hair?',
            property: 'hair.color',
            value: c13s.HairColor.brown
        },
        {
            id: Charact.blondeHair,
            description: 'Has blonde hair?',
            property: 'hair.color',
            value: c13s.HairColor.blonde
        },
        {
            id: Charact.redHair,
            description: 'Has red hair?',
            property: 'hair.color',
            value: c13s.HairColor.red
        },
        {
            id: Charact.greyHair,
            description: 'Has grey hair?',
            property: 'hair.color',
            value: c13s.HairColor.grey
        },
        {
            id: Charact.straightHair,
            description: 'Has straight hair?',
            property: 'hair.type',
            value: c13s.HairType.straight
        },
        {
            id: Charact.curlyHair,
            description: 'Has curly hair?',
            property: 'hair.type',
            value: c13s.HairType.curly
        },
        {
            id: Charact.blackEyes,
            description: 'Has black eyes?',
            property: 'eyeColor',
            value: c13s.EyeColor.black
        },
        {
            id: Charact.brownEyes,
            description: 'Has brown eyes?',
            property: 'eyeColor',
            value: c13s.EyeColor.brown
        },
        {
            id: Charact.blueEyes,
            description: 'Has blue eyes?',
            property: 'eyeColor',
            value: c13s.EyeColor.blue
        },
        {
            id: Charact.greenEyes,
            description: 'Has green eyes?',
            property: 'eyeColor',
            value: c13s.EyeColor.green
        },
        {
            id: Charact.hat,
            description: 'Is wearing a hat?',
            property: 'accessories',
            value: c13s.Accessory.hat
        },
        {
            id: Charact.earrings,
            description: 'Is wearing earrings?',
            property: 'accessories',
            value: c13s.Accessory.earrings
        },
        {
            id: Charact.glasses,
            description: 'Is wearing glasses?',
            property: 'accessories',
            value: c13s.Accessory.glasses
        },
        {
            id: Charact.hairLaces,
            description: 'Is wearing hair laces?',
            property: 'accessories',
            value: c13s.Accessory.hairLace
        }
    ]

    questions.forEach(question => question.property = propertyPrefix + question.property)

    if (id) {
        return questions.find(question => question.id === parseInt(id));
    } else {
        return questions;
    }
};