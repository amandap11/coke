/* Exercise 6: Make it modular */
var path = require('path');

var filterDir = require('./modularFilteredLs');
var dirName = process.argv[2];
var extension = '.' + process.argv[3];

function filterExtname(err, data){
    if (err){
        throw err;
    }

    data.forEach(function(item){
        if(path.extname(item) === extension){
            console.log(item);
        }
    });
}

filterDir(dirName, extension, filterExtname);