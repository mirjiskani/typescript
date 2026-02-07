var singleTon = /** @class */ (function () {
    function singleTon() {
        // Private constructor to prevent instantiation
    }
    singleTon.getInstance = function () {
        if (!singleTon.instance) {
            singleTon.instance = new singleTon();
        }
        return singleTon.instance;
    };
    singleTon.prototype.someMethod = function () {
        console.log("This is a method in the singleton class.");
    };
    return singleTon;
}());
// Usage
var singletonInstance1 = singleTon.getInstance();
var singletonInstance2 = singleTon.getInstance();
console.log(singletonInstance1 === singletonInstance2); // true
singletonInstance1.someMethod();
