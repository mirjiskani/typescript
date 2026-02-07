// Adapter pattern allows incompatible interfaces to work together. 
// It acts as a bridge between two incompatible interfaces.

// The adapter pattern is often used when you want to use an existing class, 
// but its interface does not match the one you need.
// example of adapter pattern
interface OldInterface {
    oldMethod(): void;
}
interface NewInterface {
    newMethod(): void;
}

class OldClass implements OldInterface {
    oldMethod(): void {
        console.log("This is the old method.");
    }
}   
class Adapter implements NewInterface {
    private oldClass: OldClass;
    constructor(oldClass: OldClass) {
        this.oldClass = oldClass;
    }   
    newMethod(): void {
        // Adapting the old method to the new method
        this.oldClass.oldMethod();
    }   
}

// Usage
const oldClassInstance = new OldClass();
const adapterInstance = new Adapter(oldClassInstance);
adapterInstance.newMethod(); // Output: This is the old method. 