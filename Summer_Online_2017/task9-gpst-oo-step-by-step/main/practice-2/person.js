// Write your code here

module.exports = class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    const personPrototype = Object.getPrototypeOf(this);
    if (personPrototype.hasOwnProperty.call(this, 'nextID')) {
      this.id = personPrototype.nextID;
      personPrototype.nextID += 1;
    } else {
      this.id = 1;
      personPrototype.nextID = 2;
    }
    Person.prototype.introduce = () => `My name is ${this.name}. I am ${this.age} years old.`;
  }
};
