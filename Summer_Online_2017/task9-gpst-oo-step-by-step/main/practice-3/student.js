const Person = require('./person');

module.exports = class Student extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }

  introduce() {
    let classInfo = 'I haven\'t been allowed to join Class.';
    if (this.clazz && this.clazz.hasStudent(this.id)) {
      classInfo = this.clazz.leader === this.id ? `I am Leader of Class ${this.clazz.number}.` : `I am at Class ${this.clazz.number}.`;
    }
    return `${super.introduce()} I am a Student. ${classInfo}`;
  }
};
