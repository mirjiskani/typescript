// Single Repository Principle (SRP) states that
//  a class should have only one reason to change,
//  meaning it should have only one responsibility or job.
//  This principle helps to create more maintainable and 
// flexible code by ensuring that each class has a clear responsibility.
// example of single repository principle
// Enum type
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up");
            break;
        case Direction.Down:
            console.log("Moving down");
            break;
        case Direction.Left:
            console.log("Moving left");
            break;
        case Direction.Right:
            console.log("Moving right");
            break;
    }
}
move(Direction.Up); // Output: Moving up
move(Direction.Left); // Output: Moving left    
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
// UserRepository class is responsible for managing user data
// It has only one reason to change, which is when we need to change how we manage user data
// If we need to change how we manage user data, 
// we only need to change the UserRepository class
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.users = [];
    }
    UserRepository.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserRepository.prototype.getUsers = function () {
        return this.users;
    };
    return UserRepository;
}());
// Usage
var userRepository = new UserRepository();
var user1 = new User("Mir Khan", 30);
userRepository.addUser(user1);
console.log(userRepository.getUsers()); // Output: [ User { name: 'Mir Khan', age: 30 } ]
