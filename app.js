"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi! my name is " + this.name + " and I am " + this.age;
    };
    ;
    return Person;
}());
var mantoss = new Person("Mantoss", 35);
console.log(mantoss.greet());
