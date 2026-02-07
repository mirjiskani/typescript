// Use a different variable name to avoid redeclaration error
let userFullName: string = "Mir Khan";
console.log(userFullName);
let user: { name: string; age: number; email: string } = {
    name: "Mir Khan",
    age: 30,
    email: "mir.khan@example.com"
};
console.log(user);
console.log(user.name); // Now works: Property 'name' exists on type

// tuple
let userInfo: [string, number, string] = ["Mir Khan", 30, "mir.khan@example.com"];
console.log(userInfo);
//end of tuple example

// union type

let userId: string | number = "Mir Khan";
console.log(userId);
userId = 12345;
console.log(userId);

// end of union type example

// intersection type
interface Person {
    name: string;
    age: number;
}
interface Employee {
    employeeId: number;
}
type EmployeePerson = Person & Employee;
let employeePerson: EmployeePerson = {
    name: "Mir Khan",   
    age: 30,
    employeeId: 12345,
    getEmployeeId(): number {
        return this.employeeId;
    }
};
console.log(employeePerson);

// end of intersection type example

// literal type
type Direction = "North" | "South" | "East" | "West";
let moveDirection: Direction = "North";
console.log(moveDirection);
// end of literal type example

// enum type
enum Color {
    Red,
    Green,  
    Blue
}
let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: 1 (the index of Green in the enum)
if(favoriteColor === Color.Green) {
    console.log("Your favorite color is Green");
}else {   
     console.log("Your favorite color is not Green");
}

// Change favoriteColor to demonstrate comparison
favoriteColor = Color.Red;
if(favoriteColor === Color.Red) {
    console.log("Your favorite color is Red");
} else {
    console.log("Your favorite color is not Red");
}
// end of enum type example


// Intersection type
interface A {
    name: string;
}
interface B {
    age: number;
}
type AB = A & B;
let person: AB = {
    name: "Mir Khan",   
    age: 30
};
console.log(person);
// end of intersection type example
// Type assertion
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);
// end of type assertion example

// getting heading element
// let heading = document.querySelector("h1") as HTMLHeadingElement;   
// if (heading) {
//     console.log(heading.textContent);
// }

// end of getting heading element example

// class with type annotations
class UserClass {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }           
    getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }   
}
let user1 = new UserClass("Mir Khan", 30);
console.log("class with type annotations example:");
console.log(user1.getInfo());
// end of class with type annotations example
   
// Access modifiers
class Employee {
    public name: string;
    public age: number;
    public employeeId: number;
    constructor(employeeId: number, name: string, age: number) {
        this.employeeId = employeeId;
        this.name = name;
        this.age = age;
    }
    getEmployeeId(): number {
        return this.employeeId;
    }   
}
let employee1 = new Employee(12345, "Mir Khan", 30);
console.log("Access modifiers example:");
console.log(employee1.name);
// console.log(employee1.age); // Error: Property 'age' is protected and only accessible within class 'Employee' and its subclasses
console.log(employee1.getEmployeeId()); // Accessing private property through public method
// end of access modifiers example


// importing module example
import type User from "./module";
let user2: User = { 
    name: "Mir Khan",
    age: 30
};
console.log("Importing module example:");
console.log(user2);
// end of importing module example