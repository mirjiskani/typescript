// example of utility types
type User = {
    name: string;
    age: number;
    email: string;
};

// Partial utility type makes all properties optional
type PartialUser = Partial<User>;
const partialUser: PartialUser = {
    name: "John Doe"
};
// Required utility type makes all properties required
type RequiredUser = Required<PartialUser>;
const requiredUser: RequiredUser = {
    name: "John Doe",
    age: 30,
    email: "" 
};
// Readonly utility type makes all properties readonly
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = {
    name: "John Doe",
    age: 30,
    email: ""
};
    
// readonlyUser.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property        

