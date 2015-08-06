var fs = require('fs');
var fileName = process.argv[2]
var fileContents = fs.readFileSync(fileName, 'utf-8');
// console.log(fileName);
var newlineCount = fileContents.split('\n').length - 1;
console.log(newlineCount);