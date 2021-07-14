"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(description, price, quantity) {
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.getQuantity = function () {
        return this.quantity;
    };
    Product.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return Product;
}());
exports.Product = Product;
// shorthand for declaring attributes and constructor in a class
