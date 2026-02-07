// Startegy Pattern: Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
// The strategy pattern is often used when you want to define a set of algorithms, 
// encapsulate each one, and make them interchangeable. 
// It allows the algorithm to vary independently from the clients that use it.  
// example of strategy pattern
interface Strategy {
    execute(a: number, b: number): number;
}
class AddStrategy
    implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}
class SubtractStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}
class MultiplyStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}
class Context {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }
    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }
    public executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}
// Usage
const context = new Context(new AddStrategy());
console.log(context.executeStrategy(5, 3)); // Output: 8
context.setStrategy(new SubtractStrategy());
console.log(context.executeStrategy(5, 3)); // Output: 2
context.setStrategy(new MultiplyStrategy());
