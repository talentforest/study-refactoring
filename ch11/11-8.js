export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  static createEngineer() {
    return new Employee(name, "E");
  }

  static createSeniorEngineer() {
    return new Employee(name, "SE");
  }

  static createMarketer() {
    return new Employee(name, "M");
  }
}

const employee = Employee.createEngineer("젤리");
