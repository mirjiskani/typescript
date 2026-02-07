// index signature example
interface StringDictionary {
    [key: string]: string;
}
let myDictionary: StringDictionary = {
    "firstName": "Mir",
    "lastName": "Khan",
    "city": "New York"
};
console.log(myDictionary);  
console.log(myDictionary["firstName"]); // Output: Mir
myDictionary["country"] = "USA"; // Adding a new key-value pair
console.log(myDictionary);

// end of index signature example

// if you have to define  dynamic keys with different value types, you can use union types in the index signature
interface MixedDictionary {
    [key: string]: string | number;
}       
let mixedDictionary: MixedDictionary = {
    "firstName": "Mir",
    "age": 30,
    "city": "New York"
};
console.log(mixedDictionary);
console.log(mixedDictionary["age"]); // Output: 30
mixedDictionary["country"] = "USA"; // Adding a new key-value pair
console.log(mixedDictionary);   
// end of mixed index signature example



// use can asign keys or indexes signation dynamically to an object
interface DynamicObject {
    [key: string]: any; // allows any type of value
}       
let dynamicObject: DynamicObject = {};
dynamicObject["name"] = "Mir Khan";
dynamicObject["age"] = 30;
dynamicObject["isEmployee"] = true;
console.log(dynamicObject);
// end of dynamic object example
    