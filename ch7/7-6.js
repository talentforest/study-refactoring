export class Shipment {
  #shippingCompany;
  #trackingNumber;

  constructor(shippingCompany, trackingNumber) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

const shipment = new Shipment(999, "Maersk");
console.log(shipment.display);

shipment.shippingCompany = "COSCO";
console.log(shipment.display);
