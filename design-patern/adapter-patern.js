// Adapter pattern allows incompatible interfaces to work together. 
// It acts as a bridge between two incompatible interfaces.
var OldClass = /** @class */ (function () {
    function OldClass() {
    }
    OldClass.prototype.oldMethod = function () {
        console.log("This is the old method.");
    };
    return OldClass;
}());
var Adapter = /** @class */ (function () {
    function Adapter(oldClass) {
        this.oldClass = oldClass;
    }
    Adapter.prototype.newMethod = function () {
        // Adapting the old method to the new method
        this.oldClass.oldMethod();
    };
    return Adapter;
}());
// Usage
var oldClassInstance = new OldClass();
var adapterInstance = new Adapter(oldClassInstance);
adapterInstance.newMethod(); // Output: This is the old method. 
