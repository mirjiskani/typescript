// keyoff operator
type User = {
    name: string;
    age: number;
    email: string;
};  
type UserKeys = keyof User; // "name" | "age" | "email"
let userKey: UserKeys = "name"; // valid
console.log(userKey);
userKey = "age"; // valid
console.log(userKey);
userKey = "email"; // valid
console.log(userKey);
// userKey = "invalid"; // Error: Type '"invalid"' is not assignable to type 'UserKeys'


// type of mostly used with object to see the keys of the object