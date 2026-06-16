class Printer {
  print(document) {
    console.log(`Printing ${document}`);
  }
}

class Scanner {
  scan(document) {
    console.log(`Scanning ${document}`);
  }
}

class Faxing {
  fax(document) {
    console.log(`Faxing ${document}`);
  }
}

class OldPrinter extends Printer {}

let oldPrinter = new OldPrinter();
oldPrinter.print("Paper 1");

class NewPrinter {
  constructor(printer, scanner, faxing) {
    this.printer = printer;
    this.scanner = scanner;
    this.faxing = faxing;
  }

  print(document) {
    this.printer.print(document);
  }

  scan(document) {
    this.scanner.scan(document);
  }

  fax(document) {
    this.faxing.fax(document);
  }
}

const printer = new Printer();
const scanner = new Scanner();
const faxing = new Faxing();

let newPrinter = new NewPrinter(printer, scanner, faxing);
newPrinter.print("Paper 1 via newPrinter");
newPrinter.scan("Paper 1 via newPrinter");
newPrinter.fax("Paper 1 via newPrinter");
