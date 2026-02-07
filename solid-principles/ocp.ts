// Open / Closed Principle (OCP) states that
//  software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
//  This means that you should be able to add new functionality to a class without changing its existing code.
//  This principle helps to create more maintainable and flexible code by allowing you to 
//  add new features without breaking existing code.

// example of open / closed principle
interface Shape {
    area(): number;
}
class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}   
    area(): number {
        return this.width * this.height;
    }
}
class Circle implements Shape {
    constructor(private radius: number) {}   
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}
// If we want to add a new shape, we can simply create a new class that implements the Shape interface
class Triangle implements Shape {
    constructor(private base: number, private height: number) {}        
    area(): number {
        return 0.5 * this.base * this.height;
    }
}
// Usage
const shapes: Shape[] = [
    new Rectangle(5, 10),
    new Circle(7),  
    new Triangle(5, 10)
];
shapes.forEach(shape => {
    console.log(shape.area());
}); // Output: 50, 153.93804002589985, 25

