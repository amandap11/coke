var sum = 0;
var arg_len = process.argv.length;
for(var i = 2; i < arg_len; i++){
    sum += Number(process.argv[i]);
}
console.log(sum);
