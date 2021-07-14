"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, length) {
        var _this = _super.call(this, x, y) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setLength = function (value) {
        this.length = value;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (value) {
        this.width = value;
    };
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", width = " + this.width + ", length = " + this.length);
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
