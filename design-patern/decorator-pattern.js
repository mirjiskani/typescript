// Decorator Pattern
// Decorator pattern allows behavior to be added to an individual object, 
// either statically or dynamically, without affecting
// the behavior of other objects from the same class.
// It is often used to extend the functionalities of classes 
// in a flexible and reusable way.
// The decorator pattern is often used when 
// you want to add responsibilities to objects without subclassing.
// Example of decorator pattern
// this is the concrete class which implements the Coffee interface and 
// provides the basic implementation of the methods
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.getCost = function () {
        return 5;
    };
    SimpleCoffee.prototype.getDescription = function () {
        return "Simple Coffee";
    };
    return SimpleCoffee;
}());
// this is the decorator class which implements the Coffee interface 
// and has a reference to the Coffee object which it decorates. 
// It adds additional behavior to the getCost and getDescription methods.
var MilkDecorator = /** @class */ (function () {
    function MilkDecorator(coffee) {
        this.coffee = coffee;
    }
    MilkDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + 2; // Adding cost of milk
    };
    MilkDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", Milk"; // Adding description of milk
    };
    return MilkDecorator;
}());
// this is another decorator class which implements the Coffee interface 
// and has a reference to the Coffee object which it decorates. 
// It adds additional behavior to the getCost and getDescription methods.
var SugarDecorator = /** @class */ (function () {
    function SugarDecorator(coffee) {
        this.coffee = coffee;
    }
    SugarDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + 1; // Adding cost of sugar
    };
    SugarDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", Sugar"; // Adding description of sugar
    };
    return SugarDecorator;
}());
// Usage
var myCoffee = new SimpleCoffee();
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
