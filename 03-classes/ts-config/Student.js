"use strict";
var Student = /** @class */ (function () {
    function Student(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    // accessors
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    Student.prototype.setLastName = function (theLast) {
        this.lastName = theLast;
    };
    return Student;
}());
var student = new Student('Felipe', 'Santos');
console.log(student.getFirstName() + " " + student.getLastName());
