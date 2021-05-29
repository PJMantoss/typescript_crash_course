const inputName = document.querySelector('#name') as HTMLInputElement; //typecasting
const inputAge = document.querySelector('#age') as HTMLInputElement;
const inputForm = document.querySelector('form')!; //! tells typescript form is not null
const greeting = document.querySelector('.greeting') as HTMLDivElement;

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

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const person = new Person(inputName.value, inputAge.valueAsNumber);

    greeting.innerText = person.greet();

    inputForm.reset();
})

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
enum manufacturerMake { Tesla, Audi, Mercedes, Volvo, BMW }

const myCar = {
    year: 2021,
    make: manufacturerMake.Volvo
}

console.log(myCar.make);