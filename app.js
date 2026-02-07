"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Use a different variable name to avoid redeclaration error
var userFullName = "Mir Khan";
console.log(userFullName);
var user = {
    name: "Mir Khan",
    age: 30,
    email: "mir.khan@example.com"
};
console.log(user);
console.log(user.name); // Now works: Property 'name' exists on type
// tuple
var userInfo = ["Mir Khan", 30, "mir.khan@example.com"];
console.log(userInfo);
//end of tuple example
// union type
var userId = "Mir Khan";
console.log(userId);
userId = 12345;
console.log(userId);
var employeePerson = {
    name: "Mir Khan",
    age: 30,
    employeeId: 12345,
    getEmployeeId: function () {
        return this.employeeId;
    }
};
console.log(employeePerson);
var moveDirection = "North";
console.log(moveDirection);
// end of literal type example
// enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log(favoriteColor); // Output: 1 (the index of Green in the enum)
if (favoriteColor === Color.Green) {
    console.log("Your favorite color is Green");
}
else {
    console.log("Your favorite color is not Green");
}
// Change favoriteColor to demonstrate comparison
favoriteColor = Color.Red;
if (favoriteColor === Color.Red) {
    console.log("Your favorite color is Red");
}
else {
    console.log("Your favorite color is not Red");
}
var person = {
    name: "Mir Khan",
    age: 30
};
console.log(person);
// end of intersection type example
// Type assertion
var someValue = "This is a string";
var strLength = someValue.length;
console.log(strLength);
// end of type assertion example
// getting heading element
// let heading = document.querySelector("h1") as HTMLHeadingElement;   
// if (heading) {
//     console.log(heading.textContent);
// }
// end of getting heading element example
// class with type annotations
var UserClass = /** @class */ (function () {
    function UserClass(name, age) {
        this.name = name;
        this.age = age;
    }
    UserClass.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return UserClass;
}());
var user1 = new UserClass("Mir Khan", 30);
console.log("class with type annotations example:");
console.log(user1.getInfo());
// end of class with type annotations example
// Access modifiers
var Employee = /** @class */ (function () {
    function Employee(employeeId, name, age) {
        this.employeeId = employeeId;
        this.name = name;
        this.age = age;
    }
    Employee.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    return Employee;
}());
var employee1 = new Employee(12345, "Mir Khan", 30);
console.log("Access modifiers example:");
console.log(employee1.name);
// console.log(employee1.age); // Error: Property 'age' is protected and only accessible within class 'Employee' and its subclasses
console.log(employee1.getEmployeeId()); // Accessing private property through public method
var user2 = {
    name: "Mir Khan",
    age: 30
};
console.log("Importing module example:");
console.log(user2);
// end of importing module example
