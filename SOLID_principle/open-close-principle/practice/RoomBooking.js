export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export class Customer {
  constructor(persons = []) {
    this.persons = persons;
  }
}

export class Booking {
  constructor(numberOfRooms, customer) {
    this.numberOfRooms = numberOfRooms;
    this.customer = customer;
  }
}
