const inputName = document.querySelector('#name') as HTMLInputElement //typecasting;
const inputAge = document.querySelector('#age');


interface PersonInterface {
    name: string;
    age: number;
}

class Person implements PersonInterface {
    constructor (public name: string, public age: number){}

    greet(){
        return `Hi! my name is ${this.name} and I am ${this.age}`
    };
}

let mantoss = new Person("Mantoss", 35);

console.log(mantoss.greet());