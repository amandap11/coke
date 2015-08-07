var fs = require('fs');
var fileName = process.argv[2];

var fileContents = fs.readFile(fileName, 'utf-8', function (err, data) {    
    if (err){
        console.log('Error happened on reading!');
        throw err;
    }
    var newlineCount = data.split('\n').length - 1;
    console.log(newlineCount);
});
