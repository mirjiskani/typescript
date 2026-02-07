// we are creating a factory for creating different types of vehicles

interface Vehicle {
    type: string;
    wheels: number;
    drive(): void;
}

class Car implements Vehicle {
    type: string;
    wheels: number;
    constructor() {
        this.type = "Car";
        this.wheels = 4;
    }
    drive(): void {
        console.log("Driving a car with " + this.wheels + " wheels.");
    }   
}

class Motorcycle implements Vehicle {

    type: string;
    wheels: number;
    constructor() {
        this.type = "Motorcycle";
        this.wheels = 2;
    }

    drive(): void {
        console.log("Driving a motorcycle with " + this.wheels + " wheels.");
    }
}

class VehicleFactory {
    static createVehicle(type: string): Vehicle {
        switch (type) {
            case "car":
                return new Car();
            case "motorcycle":
                return new Motorcycle();    
            default:
                throw new Error("Invalid vehicle type");
        }
    }
}

// Usage
const myCar = VehicleFactory.createVehicle("car");
myCar.drive(); // Output: Driving a car with 4 wheels.

// Usage
const motorcycle = VehicleFactory.createVehicle("motorcycle");
motorcycle.drive(); // Output: Driving a motorcycle with 2 wheels.