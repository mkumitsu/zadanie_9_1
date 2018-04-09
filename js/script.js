"use strict";
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 25);
var triangle3Area = getTriangleArea(30, 35);

function getTriangleArea(a, h) {

  if ((a <= 0) || (h <= 0)) {
        alert("Nieprawidłowe dane");
    } else {
        const triangleAreaEq = a * h / 2;
        return triangleAreaEq;
    }
}
console.log(getTriangleArea(10, 6));
console.log(triangle1Area);
