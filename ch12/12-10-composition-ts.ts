interface PrinterHeader {
  print(): void;
}

//컴포지션(위임)
class Printer {
  private printerHeader: PrinterHeader;
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrintHeader();
  }
  print() {
    this.printerHeader.print();
  }
}

class DefaultPrintHeader implements PrinterHeader {
  print() {
    console.log("기본 출력!");
  }
}

class RainbowPrinterHeader implements PrinterHeader {
  print() {
    console.log("🌈 출력!");
  }
}

class MoonPrinterHeader implements PrinterHeader {
  print() {
    console.log("🌕 출력!");
  }
}

const printers = [
  new Printer(),
  new Printer(new RainbowPrinterHeader()),
  new Printer(new MoonPrinterHeader()),
];
const printer = printers.forEach((printer) => printer.print());
