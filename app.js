"use strict";
var inputName = document.querySelector('#name'); //typecasting
var inputAge = document.querySelector('#age');
var inputForm = document.querySelector('form'); //! tells typescript form is not null
var greeting = document.querySelector('.greeting');
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
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
//Generics
// function doSomething<T>(arg: T): T {
//     //do something. <T> is a placeholder
//     return arg;
// }
// doSomething('5');
// interface book<T> {
//     id: number;
//     name: string;
//     data: T
// }
// const aBook: book<string> = {
//     id: 1,
//     name: 'Title 1',
//     data: '1'
// }
// const bBook: book<string[]> = {
//     id: 2,
//     name: 'Title 2',
//     data: ["Review 1", "Review 2"]
// }
//Enums: ways to assign descriptive words to a numeric values
var manufacturerMake;
(function (manufacturerMake) {
    manufacturerMake[manufacturerMake["Tesla"] = 0] = "Tesla";
    manufacturerMake[manufacturerMake["Audi"] = 1] = "Audi";
    manufacturerMake[manufacturerMake["Mercedes"] = 2] = "Mercedes";
    manufacturerMake[manufacturerMake["Volvo"] = 3] = "Volvo";
    manufacturerMake[manufacturerMake["BMW"] = 4] = "BMW";
})(manufacturerMake || (manufacturerMake = {}));
var myCar = {
    year: 2021,
    make: manufacturerMake.Volvo
};
console.log(myCar.make);
