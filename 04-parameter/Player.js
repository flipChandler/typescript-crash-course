"use strict";
var Player = /** @class */ (function () {
    function Player(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Player.prototype.getFirstName = function () {
        return this.firstName;
    };
    Player.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Player.prototype.getLastName = function () {
        return this.lastName;
    };
    Player.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Player.prototype.getAge = function () {
        return this.age;
    };
    Player.prototype.setAge = function (age) {
        this.age = age;
    };
    return Player;
}());
// shorthand for declaring attributes and constructor in a class
