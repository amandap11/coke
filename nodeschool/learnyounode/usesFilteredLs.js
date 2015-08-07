/* Exercise 6: Make it modular */
var filterDir = require('./modularFilteredLs');
var dirName = process.argv[2];
var extension = process.argv[3];

filterDir(dirName, extension, function(err, list){
    if(err){
        throw err;
    }

    list.forEach(function(file){
        console.log(file);
    });
});