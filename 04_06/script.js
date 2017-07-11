var firstFunction = 7/9;
var secondFunction = 13/25;

var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFunction, secondFunction)

console.log(theBiggest);
