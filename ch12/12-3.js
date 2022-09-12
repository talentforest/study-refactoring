class Party {
  #name;
  constructor() {
    if (name.lenght === 0) return;
    this.#name = name;
  }
}

class Employee extends Party {
  #name;
  #id;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  #name;
  #staff;
  constructor(name, staff) {
    super(name);
    this.#staff = staff;
  }
}

const ellie = new Employee("엘리", 123, 13);
const department = new Department("개발부서", ellie);
