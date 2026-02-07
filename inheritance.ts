// inheritance.ts

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }       

}
class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}
let dog = new Dog("Buddy", "Golden Retriever");
console.log("Inheritance example:");
dog.makeSound();
// end of inheritance example