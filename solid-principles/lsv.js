// iskov Substitution Principle (LSP) states that
//  objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
//  This means that if a class is a subclass of another class, it should be able to be used in place of the superclass without causing any issues.
//  This principle helps to create more maintainable and flexible code by ensuring that subclasses can be used in place of their superclasses without breaking the code.
// example of iskov substitution principle
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("I can fly");
    };
    return Bird;
}());
var Sparrow = /** @class */ (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sparrow.prototype.fly = function () {
        console.log("I can fly like a sparrow");
    };
    return Sparrow;
}(Bird));
var Ostrich = /** @class */ (function (_super) {
    __extends(Ostrich, _super);
    function Ostrich() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ostrich.prototype.fly = function () {
        throw new Error("I cannot fly");
    };
    return Ostrich;
}(Bird));
// Usage
var birds = [
    new Sparrow(),
    new Ostrich()
];
birds.forEach(function (bird) {
    try {
        bird.fly();
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message); // Output: I can fly like a sparrow, I cannot fly
        }
        else {
            console.log(error); // Fallback for non-Error exceptions
        }
    }
});
