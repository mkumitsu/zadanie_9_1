"use strict";
//var a = 5;
//var h = 5;
//var score = getTriangleArea(a, h);
function getTriangleArea(a, h) {
var getTriangleArea = a * h / 2;
if ( (a <= 0) || (h <= 0) ) {
console.log("Nieprawidłowe dane");
}
else {
return console.log(getTriangleArea(10, 6));
}
}