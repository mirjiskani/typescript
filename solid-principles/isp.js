var MultiFunctionPrinter = /** @class */ (function () {
    function MultiFunctionPrinter() {
    }
    MultiFunctionPrinter.prototype.print = function () {
        console.log("Printing...");
    };
    MultiFunctionPrinter.prototype.scan = function () {
        console.log("Scanning...");
    };
    return MultiFunctionPrinter;
}());
var SimplePrinter = /** @class */ (function () {
    function SimplePrinter() {
    }
    SimplePrinter.prototype.print = function () {
        console.log("Printing...");
    };
    return SimplePrinter;
}());
// Usage
var multiFunctionPrinter = new MultiFunctionPrinter();
multiFunctionPrinter.print(); // Output: Printing...
multiFunctionPrinter.scan(); // Output: Scanning... 
var simplePrinter = new SimplePrinter();
simplePrinter.print(); // Output: Printing...
