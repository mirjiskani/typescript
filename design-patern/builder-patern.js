// builder design pattern is a design pattern that allows you to create complex objects
// step by step. It separates the construction of a complex object 
// from its representation, allowing the same construction process 
// to create different representations.
// The builder pattern is often used when you want
// to create an object that requires a lot of 
// configuration or has many optional parameters. 
// It can help to simplify the construction process and make the code more readable.
// example of builder design pattern
var Computer = /** @class */ (function () {
    function Computer(builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.gpu = builder.gpu;
    }
    Computer.prototype.getSpecs = function () {
        return "CPU: ".concat(this.cpu, ", RAM: ").concat(this.ram, ", Storage: ").concat(this.storage, ", GPU: ").concat(this.gpu);
    };
    return Computer;
}());
var ComputerBuilder = /** @class */ (function () {
    function ComputerBuilder() {
        // Set default values
        this.cpu = "Intel i5";
        this.ram = "8GB";
        this.storage = "256GB SSD";
        this.gpu = "Integrated Graphics";
    }
    ComputerBuilder.prototype.setCPU = function (cpu) {
        this.cpu = cpu;
        return this;
    };
    ComputerBuilder.prototype.setRAM = function (ram) {
        this.ram = ram;
        return this;
    };
    ComputerBuilder.prototype.setStorage = function (storage) {
        this.storage = storage;
        return this;
    };
    ComputerBuilder.prototype.setGPU = function (gpu) {
        this.gpu = gpu;
        return this;
    };
    ComputerBuilder.prototype.build = function () {
        return new Computer(this); // Pass the builder instance to the Computer constructor
    };
    return ComputerBuilder;
}());
// Usage
var myComputer = new ComputerBuilder()
    .setCPU("AMD Ryzen 7")
    .setRAM("16GB")
    .setStorage("512GB SSD")
    .setGPU("NVIDIA RTX 3060")
    .build();
console.log(myComputer.getSpecs()); // Output: CPU: AMD Ryzen 7, RAM: 16GB, Storage: 512GB SSD, GPU: NVIDIA RTX 3060
