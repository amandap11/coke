/* Exercise 6: Make it Modular */
var fs = require('fs');

module.exports = lsByExtension;

function lsByExtension (dirName, extension, callback) {
    fs.readdir(dirName, callback);
}