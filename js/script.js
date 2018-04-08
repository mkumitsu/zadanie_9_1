"use strict";
var a = 4;
var h = 5;
var area = getTriangleArea(a, h);

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        alert("Nieprawidłowe dane");
    } else {
        var triangleArea = a * h / 2;
        return alert("Pole trójkąta wynosi: " + triangleArea);     
    }
}