//상속
class Printer {
  print() {
    console.log("기본 출력!");
  }
}

class RainbowPrinterHeader extends Printer {
  print() {
    console.log("🌈 출력!");
  }
}

const printers = [new Printer(), new RainbowPrinterHeader()];
printers.forEach((printer) => printer.print());
