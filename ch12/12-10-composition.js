//컴포지션
class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }
  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log("기본 출력!");
  }
}

class RainbowPrinterHeader {
  print() {
    console.log("🌈 출력!");
  }
}

class MoonPrinterHeader {
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
