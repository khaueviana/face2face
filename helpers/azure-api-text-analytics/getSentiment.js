const fetch = require('node-fetch');
const supportedLanguages = ['en', 'es', 'fr', 'pt'];

module.exports = function getSentiment(params, dataLanguage, callback) {
    let promises = [];
    dataLanguage.documents.forEach(function(entry) {
        let currentItem = params.reduce(function(response, item) {
            if (item.id == entry.id) response = item;
            return response;
        }, {});
        let lang = entry.detectedLanguages[0].iso6391Name;
        if (supportedLanguages.indexOf(lang) > -1) {
            let postObject = {
                language: lang,
                id: entry.id,
                text: currentItem.text
            }
            let postData = JSON.stringify({ documents: [postObject] });
            fetch('https://southcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Ocp-Apim-Subscription-Key': 'bfee732376734f82ab75b9a1be8f574b'
                    },
                    body: postData
                })
                .then(function(response) {
                    return response.json();
                })
                .then(callback);
        } else {
            console.log('\n******* Language: ', lang);
        }
    });
}