class singleTon {
    private static instance: singleTon;
    private constructor() {
        // Private constructor to prevent instantiation
    }   
    public static getInstance(): singleTon {
        if (!singleTon.instance) {
            singleTon.instance = new singleTon();
        }
        return singleTon.instance;
    }       

    public someMethod(): void {
        console.log("This is a method in the singleton class.");
    }   
}

// Usage
const singletonInstance1 = singleTon.getInstance();
const singletonInstance2 = singleTon.getInstance();
console.log(singletonInstance1 === singletonInstance2); // true
singletonInstance1.someMethod();
    