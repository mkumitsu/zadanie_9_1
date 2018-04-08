"use strict";
var a = 2;
var h = 5;

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        alert("Nieprawidłowe dane");
    } else {
        var triangleArea = a * h / 2;
        return triangleArea;
    }
}
var area = getTriangleArea(a, h);
