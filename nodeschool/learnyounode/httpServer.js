var http = require('http');

var usedUrl = process.argv[2];

http.get(usedUrl, function(res){
    res.setEncoding('utf8');

    res.on('data', console.log);
    res.on('error', console.error);
});