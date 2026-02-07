// Observer pattern example in TypeScript
// The observer pattern is a design pattern in which an object,
// called the subject, maintains a list of its dependents, called observers, 
// and notifies them automatically of any state changes, 
// usually by calling one of their methods.    
// The observer pattern is often used 
// when you want to create a one-to-many 
// relationship between objects, where one object
// (the subject) can notify multiple other objects (the observers) 
//  of changes in its state.
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Subject.prototype.notifyObservers = function (message) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(message);
        }
    };
    return Subject;
}());
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.update = function (message) {
        console.log("".concat(this.name, " received message: ").concat(message));
    };
    return ConcreteObserver;
}());
// Usage
var subject = new Subject();
var observer1 = new ConcreteObserver("Observer 1");
var observer2 = new ConcreteObserver("Observer 2");
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers("Hello Observers!"); // Output: Observer 1 received message: Hello Observers! 
//         Observer 2 received message: Hello Observers!        
subject.removeObserver(observer1);
subject.notifyObservers("Hello again!"); // Output: Observer 2 received message: Hello again!
