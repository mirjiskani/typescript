// interface with class example
interface Person {
    name: string;
    age: number;
    greet(): void;
}   
class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;
    constructor (name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }       
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My employee ID is ${this.employeeId}.`);
    }

}
let employee = new Employee("Mir Khan", 30, 12345);
employee.greet();
// end of interface with class example