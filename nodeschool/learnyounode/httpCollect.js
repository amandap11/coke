// Exercise 8: HTTP Collect

var http = require('http');
var usedUrl = process.argv[2];

http.get(usedUrl, function(res){
    res.setEncoding('utf8');
    var completeString = '';

    res.on('data', function(data){        
        completeString += data;
    });
    res.on('error', console.error);

    res.on('end', function(end){
        console.log(completeString.length);
        console.log(completeString);
    });
});

/*
Official solution:

var http = require('http')
var bl = require('bl')
    
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))  
})

*/