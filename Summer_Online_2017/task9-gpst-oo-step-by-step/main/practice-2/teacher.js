const Person = require('./person');

module.exports = class Teacher extends Person {
  constructor(name, age, clazzes) {
    super(name, age);
    this.clazzes = clazzes;
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
};
