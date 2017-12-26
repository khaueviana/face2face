var fs = require('fs');
//var path = require('path');

var FileHelper = {
    getFileNames: function (filesPath) {
        return fs.readdirSync(filesPath);
    }
};

module.exports = FileHelper;