var fs = require('fs');

var FileHelper = {
    getFileNames: function (filesPath) {
        return fs.readdirSync(filesPath);
    }
};

module.exports = FileHelper;