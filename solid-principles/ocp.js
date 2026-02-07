// Open / Closed Principle (OCP) states that
//  software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
//  This means that you should be able to add new functionality to a class without changing its existing code.
//  This principle helps to create more maintainable and flexible code by allowing you to 
//  add new features without breaking existing code.
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
// If we want to add a new shape, we can simply create a new class that implements the Shape interface
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.area = function () {
        return 0.5 * this.base * this.height;
    };
    return Triangle;
}());
// Usage
var shapes = [
    new Rectangle(5, 10),
    new Circle(7),
    new Triangle(5, 10)
];
shapes.forEach(function (shape) {
    console.log(shape.area());
}); // Output: 50, 153.93804002589985, 25
