var AddStrategy = /** @class */ (function () {
    function AddStrategy() {
    }
    AddStrategy.prototype.execute = function (a, b) {
        return a + b;
    };
    return AddStrategy;
}());
var SubtractStrategy = /** @class */ (function () {
    function SubtractStrategy() {
    }
    SubtractStrategy.prototype.execute = function (a, b) {
        return a - b;
    };
    return SubtractStrategy;
}());
var MultiplyStrategy = /** @class */ (function () {
    function MultiplyStrategy() {
    }
    MultiplyStrategy.prototype.execute = function (a, b) {
        return a * b;
    };
    return MultiplyStrategy;
}());
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.executeStrategy = function (a, b) {
        return this.strategy.execute(a, b);
    };
    return Context;
}());
// Usage
var context = new Context(new AddStrategy());
console.log(context.executeStrategy(5, 3)); // Output: 8
context.setStrategy(new SubtractStrategy());
console.log(context.executeStrategy(5, 3)); // Output: 2
context.setStrategy(new MultiplyStrategy());
