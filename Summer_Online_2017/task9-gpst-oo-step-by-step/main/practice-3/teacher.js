const Person = require('./person');

module.exports = class Teacher extends Person {
  constructor(name, age, clazzes) {
    super(name, age);
    this.clazzes = clazzes;
    this.clazzes.forEach((clazz) => {
      clazz.teacher = this;
    });
  }

  introduce() {
    if (this.clazzes && this.clazzes.length > 0) {
      const classes = [];
      this.clazzes.forEach((clazz) => {
        classes.push(clazz.number);
      });
      return `${super.introduce()} I am a Teacher. I teach Class ${classes.join(',')}.`;
    }
    return `${super.introduce()} I am a Teacher. I teach No Class.`;
  }

  isTeaching(student) {
    let flag = false;
    this.clazzes.forEach((clazz) => {
      if (clazz.hasStudent(student.id) === true) {
        flag = true;
      }
    });
    return flag;
  }

  notifyStudentAppended(studentInfo) {
    console.log(`I am ${this.name}. I know ${studentInfo}.`);
  }

  notifyLeaderAssigned(studentInfo) {
    console.log(`I am ${this.name}. I know ${studentInfo}.`);
  }
};
