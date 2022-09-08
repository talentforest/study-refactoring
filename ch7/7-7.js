class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }
}

const person = new Person("Tom", "aManager", "999");

console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);

person.name = "jellie";
person.manager = "bManager";
person.chargeCode = "111";
console.log(person.name); // jellie
console.log(person.manager); // bManager
console.log(person.chargeCode); // 111
