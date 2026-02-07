// Decorator Pattern
// Decorator pattern allows behavior to be added to an individual object, 
// either statically or dynamically, without affecting
// the behavior of other objects from the same class.
// It is often used to extend the functionalities of classes 
// in a flexible and reusable way.
// The decorator pattern is often used when 
// you want to add responsibilities to objects without subclassing.
// Example of decorator pattern

// this is the interface of coffee it has two methods getCost and getDescription which 
// will be implemented by the concrete class and the decorators
interface Coffee {
    getCost(): number;
    getDescription(): string;
}

// this is the concrete class which implements the Coffee interface and 
// provides the basic implementation of the methods
class SimpleCoffee implements Coffee {
    getCost(): number {
        return 5;
    }   
    getDescription(): string {
        return "Simple Coffee";
    }
}
// this is the decorator class which implements the Coffee interface 
// and has a reference to the Coffee object which it decorates. 
// It adds additional behavior to the getCost and getDescription methods.

class MilkDecorator implements Coffee {
    private coffee: Coffee;
    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }   
    getCost(): number {
        return this.coffee.getCost() + 2; // Adding cost of milk
    }   
    getDescription(): string {
        return this.coffee.getDescription() + ", Milk"; // Adding description of milk
    }
}
// this is another decorator class which implements the Coffee interface 
// and has a reference to the Coffee object which it decorates. 
// It adds additional behavior to the getCost and getDescription methods.
class SugarDecorator implements Coffee {
    private coffee: Coffee;
    constructor(coffee: Coffee) {   
        this.coffee = coffee;
    }   
    getCost(): number {
        return this.coffee.getCost() + 1; // Adding cost of sugar
    }
    getDescription(): string {
        return this.coffee.getDescription() + ", Sugar"; // Adding description of sugar
    }
}
// Usage
let myCoffee: Coffee = new SimpleCoffee();
console.log(myCoffee.getCost()); // Output: 5
console.log(myCoffee.getDescription()); // Output: Simple Coffee

// let's call sugar decorator to add sugar to our coffee
myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.getCost()); // Output: 6
console.log(myCoffee.getDescription()); // Output: Simple Coffee, Sugar

// let's call milk decorator to add milk to our coffee
myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.getCost()); // Output: 8
console.log(myCoffee.getDescription()); // Output: Simple Coffee, Sugar, Milk
