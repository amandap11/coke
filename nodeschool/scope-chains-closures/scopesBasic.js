// Exercise 1. Scope + Exercise 2
function foo () {
    var bar;
    quux = 1;
    function zip(){
        bar = true;
        var quux = 2;
    }
    return zip;
}