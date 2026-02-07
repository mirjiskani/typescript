// builder design pattern is a design pattern that allows you to create complex objects
// step by step. It separates the construction of a complex object 
// from its representation, allowing the same construction process 
// to create different representations.

// The builder pattern is often used when you want
// to create an object that requires a lot of 
// configuration or has many optional parameters. 
// It can help to simplify the construction process and make the code more readable.

// example of builder design pattern
class Computer {
    private cpu: string;
    private ram: string;
    private storage: string;
    private gpu: string;
    constructor(builder: ComputerBuilder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.gpu = builder.gpu;
    }
    public getSpecs(): string {
        return `CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}, GPU: ${this.gpu}`;
    }   
}

class ComputerBuilder {
    public cpu: string;
    public ram: string;
    public storage: string;
    public gpu: string
    constructor() {
        // Set default values
        this.cpu = "Intel i5";
        this.ram = "8GB";
        this.storage = "256GB SSD";
        this.gpu = "Integrated Graphics";
    }
    public setCPU(cpu: string): ComputerBuilder {
        this.cpu = cpu;
        return this;
    }       
    public setRAM(ram: string): ComputerBuilder {
        this.ram = ram;
        return this;
    }       
    public setStorage(storage: string): ComputerBuilder {
        this.storage = storage;
        return this;
    }
    public setGPU(gpu: string): ComputerBuilder {
        this.gpu = gpu;
        return this;
    }       
    public build(): Computer {
        return new Computer(this);// Pass the builder instance to the Computer constructor
    }   
}   

// Usage
const myComputer = new ComputerBuilder()
    .setCPU("AMD Ryzen 7")
    .setRAM("16GB")
    .setStorage("512GB SSD")
    .setGPU("NVIDIA RTX 3060")
    .build();

console.log(myComputer.getSpecs()); // Output: CPU: AMD Ryzen 7, RAM: 16GB, Storage: 512GB SSD, GPU: NVIDIA RTX 3060




