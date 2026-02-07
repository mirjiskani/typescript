// we are creating a factory for creating different types of vehicles
var Car = /** @class */ (function () {
    function Car() {
        this.type = "Car";
        this.wheels = 4;
    }
    Car.prototype.drive = function () {
        console.log("Driving a car with " + this.wheels + " wheels.");
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle() {
        this.type = "Motorcycle";
        this.wheels = 2;
    }
    Motorcycle.prototype.drive = function () {
        console.log("Driving a motorcycle with " + this.wheels + " wheels.");
    };
    return Motorcycle;
}());
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.createVehicle = function (type) {
        switch (type) {
            case "car":
                return new Car();
            case "motorcycle":
                return new Motorcycle();
            default:
                throw new Error("Invalid vehicle type");
        }
    };
    return VehicleFactory;
}());
// Usage
var myCar = VehicleFactory.createVehicle("car");
myCar.drive(); // Output: Driving a car with 4 wheels.
// Usage
var motorcycle = VehicleFactory.createVehicle("motorcycle");
motorcycle.drive(); // Output: Driving a motorcycle with 2 wheels.
