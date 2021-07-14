"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.getX = function () {
        return this.x;
    };
    Shape.prototype.setX = function (value) {
        this.x = value;
    };
    Shape.prototype.getY = function () {
        return this.y;
    };
    Shape.prototype.setY = function (value) {
        this.y = value;
    };
    Shape.prototype.getInfo = function () {
        return "x = " + this.x + ", y = " + this.y;
    };
    return Shape;
}());
exports.Shape = Shape;
