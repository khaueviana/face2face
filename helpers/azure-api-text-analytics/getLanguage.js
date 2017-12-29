const fetch = require('node-fetch');

module.exports = function getLanguage(args, callback) {
    let documents = [];

    args.forEach(function(entry) {
        documents.push({
            id: entry.id,
            text: entry.text
        });
    });

    let postData = JSON.stringify({ documents: documents });

    fetch('https://southcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/languages?numberOfLanguagesToDetect=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': 'bfee732376734f82ab75b9a1be8f574b'
                    // 'Content-Length': Buffer.byteLength(postData)
            },
            body: postData
        })
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}