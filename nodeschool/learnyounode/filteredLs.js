var fs = require('fs');
var path = require('path');
var dirName = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dirName, function(err, data){
    if (err){
        throw err;
    }

    var validFiles;
    d_len = data.length;
    for(var i = 0; i < d_len; i++){
        if(path.extname(data[i]) == extension){
            console.log(data[i]);
        }
    }
});