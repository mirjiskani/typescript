function name(): string {
    return "Mir Khan";
}
function anyThing(): any {
    return "This can be any type";
}
function voidFunction(): void {
    console.log("This function does not return anything");
}
function neverFunction(): never {
    throw new Error("This function never returns");
}
function unionTypeFunction(value: string | number): string {
    if (typeof value === "string") {
        return `You passed a string: ${value}`;
    } else {
        return `You passed a number: ${value}`;
    }   
}
console.log(name());
console.log(anyThing());
voidFunction();
console.log(unionTypeFunction("Hello"));
console.log(unionTypeFunction(42));
console.log(unionTypeFunction("Mir Khan"));