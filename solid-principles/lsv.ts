// liskov Substitution Principle (LSP) states that
//  objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
//  This means that if a class is a subclass of another class, it should be able to be used in place of the superclass without causing any issues.
//  This principle helps to create more maintainable and flexible code by ensuring that subclasses can be used in place of their superclasses without breaking the code.
// example of liskov substitution principle
class Bird {
    fly(): void {
        console.log("I can fly");
    }
}
class Sparrow extends Bird {
    fly(): void {
        console.log("I can fly like a sparrow");
    }
}
class Ostrich extends Bird {
    fly(): void {
        throw new Error("I cannot fly");
    }
}
// Usage
const birds: Bird[] = [
    new Sparrow(),  
    new Ostrich()
];
birds.forEach(bird => {
    try {
        bird.fly(); 
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message); // Output: I can fly like a sparrow, I cannot fly
        } else {
            console.log(error); // Fallback for non-Error exceptions
        }
    }
});

