class MultiFunctionalMachine {
  scan(document) {
    console.log(`scan document ${document}`);
  }

  print(document) {
    console.log(`printing ${document}`);
  }

  fax(document) {
    console.log(`faxing ${document}`);
  }
}

class OldPrinter extends MultiFunctionalMachine {
  scan(document) {
    throw new Error("OldPrinter cannot scan");
  }

  fax(document) {
    throw new Error("OldPrinter cannot fax");
  }
}

let printer = new OldPrinter();
printer.print("Print 1");
printer.scan("Print 2");

// it is violating the Interface Segregation Principle because the OldPrinter have classes that are not in used.
