class Person {
  #name;
  #department;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#department = new Department(manager, chargeCode);
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#department.manager;
  }

  set manager(arg) {
    this.#department.manager = arg;
  }

  get chargeCode() {
    return this.#department.chargeCode;
  }

  set chargeCode(arg) {
    this.#department.chargeCode = arg;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
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

person.manager = "bManager";
person.chargeCode = "111";
console.log(person.manager);
console.log(person.chargeCode);
