var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (message) {
        console.log(message);
    };
    return ConsoleLogger;
}());
var FileLogger = /** @class */ (function () {
    function FileLogger() {
    }
    FileLogger.prototype.log = function (message) {
        // Code to write the message to a file
        console.log("Writing to file: ".concat(message));
    };
    return FileLogger;
}());
var UserService = /** @class */ (function () {
    function UserService(logger) {
        this.logger = logger;
    }
    UserService.prototype.createUser = function (name) {
        // Code to create a user
        this.logger.log("User ".concat(name, " created"));
    };
    return UserService;
}());
// Usage
var consoleLogger = new ConsoleLogger();
var userService1 = new UserService(consoleLogger);
userService1.createUser("Alice"); // Output: User Alice created
var fileLogger = new FileLogger();
var userService2 = new UserService(fileLogger);
userService2.createUser("Bob"); // Output: Writing to file: User Bob created
