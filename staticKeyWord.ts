// example static keyword
class MathUtils {
    static PI: number = 3.14159;
    static calculateCircumference(radius: number): number {
        return 2 * MathUtils.PI * radius;
    }

}
console.log("Static keyword example:");
console.log(`Value of PI: ${MathUtils.PI}`);
console.log(`Circumference of a circle with radius 5: ${MathUtils.calculateCircumference(5)}`);
// end of static keyword example
