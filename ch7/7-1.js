class Organization {
  #name;
  #country;
  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    return { name: this.name, country: this.country };
  }
}

const organization = new Organization("Acme Gooseberries", "GB");

console.log(organization.name);
console.log(organization.country);

organization.name = "ellie";
organization.country = "US";

console.log(organization.name);
console.log(organization.country);

// 레코드 캡슐화하기
// Object.freeze
// Class
