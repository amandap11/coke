/* Exercise 6: Make it Modular */
var fs = require('fs');
var path = require('path');

module.exports = lsByExtension;

function lsByExtension (dirName, extension, callback) {
    var fileList = [];

    fs.readdir(dirName, function(err, list){
        if(err){
            return callback(err);
        }

        list.forEach(function(file){
            if(path.extname(file) === '.' + extension){
                fileList.push(file);
            }
        });

        return callback(null, fileList);
    });
}