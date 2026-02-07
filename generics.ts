// Generic example
function identity<T>(arg: T): T {
    return arg;
}
// it is reuseable for different types
// example usage with string type & number type & boolean type
console.log("Generic example:");
console.log(identity<string>("Hello, TypeScript!"));
console.log(identity<number>(42));
console.log(identity<boolean>(true));
// end of generic example