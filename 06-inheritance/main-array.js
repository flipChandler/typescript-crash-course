"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var Shape_1 = require("./Shape");
var shape = new Shape_1.Shape(7, 10);
var circle = new Circle_1.Circle(10, 15, 40);
var rectangle = new Rectangle_1.Rectangle(0, 0, 12, 45);
// array of Shape, other type is not allowed
var shapes = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);
shapes.forEach(function (element) {
    console.log(element);
});
