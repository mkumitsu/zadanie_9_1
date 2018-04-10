"use strict";
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 25);
var triangle3Area = getTriangleArea(-30, 35);

function getTriangleArea(a, h) {

    if ((a <= 0) || (h <= 0)) {
        return "Nieprawidłowe dane";
    } else {
        return a * h / 2;
    }
}
console.log(getTriangleArea(10, 6));
console.log(triangle3Area);
