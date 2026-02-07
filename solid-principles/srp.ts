// Single Repository Principle (SRP) states that
//  a class should have only one reason to change,
//  meaning it should have only one responsibility or job.
//  This principle helps to create more maintainable and 
// flexible code by ensuring that each class has a clear responsibility.
// example of single repository principle

// Enum type
enum Direction {
    Up, 
    Down,
    Left,
    Right
}
function move(direction: Direction): void {
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


class User {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }   
    getName(): string {
        return this.name;
    }   
    getAge(): number {
        return this.age;
    }
}
// UserRepository class is responsible for managing user data
// It has only one reason to change, which is when we need to change how we manage user data
// If we need to change how we manage user data, 
// we only need to change the UserRepository class

class UserRepository {
    private users: User[] = [];
    addUser(user: User): void {
        this.users.push(user);
    }   
    getUsers(): User[] {
        return this.users;
    }
}       
// Usage
const userRepository = new UserRepository();
const user1 = new User("Mir Khan", 30);
userRepository.addUser(user1);
console.log(userRepository.getUsers()); // Output: [ User { name: 'Mir Khan', age: 30 } ]
