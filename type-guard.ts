// typeGuard example
function isString(value: any): value is string {
    return typeof value === "string";
}
function isNumber(value: any): value is number {
    return typeof value === "number";
}
function isBoolean(value: any): value is boolean {
    return typeof value === "boolean";
}   
function processValue(value: string | number | boolean): void {
    if (isString(value)) {
        console.log(`The value is a string: ${value}`);
    } else if (isNumber(value)) {
        console.log(`The value is a number: ${value}`);
    } else {
        console.log(`The value is a boolean: ${value}`);
    }   

}
console.log("Type Guard example:");
processValue("Hello, TypeScript!");
processValue(true);
processValue(42);
// end of typeGuard example       