const c13s = require("./characters/characteristics/");

module.exports = function (id) {
    const propertyPrefix = 'board.misteryFace.';

    const questions = [
        {
            id: 1,
            description: "It's a man?",
            property: "gender",
            value: c13s.Gender.male
        },
        {
            id: 2,
            description: "It's a woman?",
            property: "gender",
            value: c13s.Gender.female
        },
        {
            id: 3,
            description: "Has beard?",
            property: "face.hasBeard",
            value: true
        },
        {
            id: 4,
            description: "Has mustache?",
            property: "face.hasMustache",
            value: true
        },
        {
            id: 5,
            description: "It's bald?",
            property: "hair.length",
            value: c13s.HairLength.bald
        },
        {
            id: 6,
            description: "Has short hair?",
            property: "hair.length",
            value: c13s.HairLength.short
        },
        {
            id: 7,
            description: "Has long hair?",
            property: "hair.length",
            value: c13s.HairLength.long
        },
        {
            id: 8,
            description: 'Has black hair?',
            property: 'hair.color',
            value: c13s.HairColor.black
        },
        {
            id: 9,
            description: 'Has brown hair?',
            property: 'hair.color',
            value: c13s.HairColor.brown
        },
        {
            id: 10,
            description: 'Has blonde hair?',
            property: 'hair.color',
            value: c13s.HairColor.blonde
        },
        {
            id: 11,
            description: 'Has red hair?',
            property: 'hair.color',
            value: c13s.HairColor.red
        },
        {
            id: 12,
            description: 'Has grey hair?',
            property: 'hair.color',
            value: c13s.HairColor.grey
        },
        {
            id: 13,
            description: 'Has straight hair?',
            property: 'hair.type',
            value: c13s.HairType.straight
        },
        {
            id: 14,
            description: 'Has curly hair?',
            property: 'hair.type',
            value: c13s.HairType.curly
        },
        {
            id: 15,
            description: 'Has black eyes?',
            property: 'eyeColor',
            value: c13s.EyeColor.black
        },
        {
            id: 16,
            description: 'Has brown eyes?',
            property: 'eyeColor',
            value: c13s.EyeColor.brown
        },
        {
            id: 17,
            description: 'Has blue eyes?',
            property: 'eyeColor',
            value: c13s.EyeColor.blue
        },
        {
            id: 18,
            description: 'Has green eyes?',
            property: 'eyeColor',
            value: c13s.EyeColor.green
        },
        {
            id: 19,
            description: 'Is wearing a hat?',
            property: 'accessories',
            value: c13s.Accessory.hat
        },
        {
            id: 20,
            description: 'Is wearing earrings?',
            property: 'accessories',
            value: c13s.Accessory.earRings
        },
        {
            id: 21,
            description: 'Is wearing glasses?',
            property: 'accessories',
            value: c13s.Accessory.glasses
        },
        {
            id: 22,
            description: 'Is wearing hair laces?',
            property: 'accessories',
            value: c13s.Accessory.hairLace
        }
    ]

    questions.forEach(question => question.property = propertyPrefix + question.property)

    return questions.find(question => question.id === id);
};