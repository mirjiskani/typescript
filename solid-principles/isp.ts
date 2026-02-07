//  Interface Segregation Principle (ISP) states that
//  clients should not be forced to depend on interfaces they do not use.
//  This principle helps to create more maintainable and flexible code by ensuring that clients only depend on the interfaces they need.
// example of interface segregation principle
interface Printer {
    print(): void;
}
interface Scanner {
    scan(): void;
}
class MultiFunctionPrinter implements Printer, Scanner {
    print(): void {
        console.log("Printing...");
    }   
    scan(): void {
        console.log("Scanning...");
    }

}
class SimplePrinter implements Printer {
    print(): void {
        console.log("Printing...");
    }
}   
// Usage
const multiFunctionPrinter = new MultiFunctionPrinter();
multiFunctionPrinter.print(); // Output: Printing...
multiFunctionPrinter.scan(); // Output: Scanning... 
const simplePrinter = new SimplePrinter();
simplePrinter.print(); // Output: Printing...
