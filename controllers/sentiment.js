var express = require('express');
var router = express.Router();

const getLanguage = require('../helpers/azure-api-text-analytics/getLanguage');
const getSentiment = require('../helpers/azure-api-text-analytics/getSentiment');

router.post('/', function(req, res, next) {

    var text = req.body.text;

    var args = [{
        id: "1",
        text
    }];

    getLanguage(args, function(dataLanguage) {
        getSentiment(args, dataLanguage, function(dataSentiment) {
            res.status(200).send(dataSentiment);
        });
    });

});

module.exports = router;