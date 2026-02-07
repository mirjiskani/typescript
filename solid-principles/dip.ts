//  
//  Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules. 
// Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
//  This principle helps to create more maintainable and flexible code by ensuring that 
// high-level modules are not tightly coupled to low-level modules, and that both depend on abstractions
//  rather than concrete implementations.
// example of dependency inversion principle
interface Logger {
    log(message: string): void;
}   
class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}
class FileLogger implements Logger {
    log(message: string): void {
        // Code to write the message to a file
        console.log(`Writing to file: ${message}`);
    }
}   
class UserService {
    constructor(private logger: Logger) {}
    createUser(name: string): void {
        // Code to create a user
        this.logger.log(`User ${name} created`);
    }

}
// Usage
const consoleLogger = new ConsoleLogger();
const userService1 = new UserService(consoleLogger);
userService1.createUser("Alice"); // Output: User Alice created
const fileLogger = new FileLogger();
const userService2 = new UserService(fileLogger);
userService2.createUser("Bob"); // Output: Writing to file: User Bob created
