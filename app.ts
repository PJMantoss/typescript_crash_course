
interface PersonInterface {
    name: string;
    age: number;
}

class Person implements PersonInterface {
    constructor (public name: string, public age: number){}

    greet();
}

console.log("hi");