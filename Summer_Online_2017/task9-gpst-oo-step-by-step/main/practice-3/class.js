//Write your code here
module.exports = class Class {
  constructor(number) {
    this.number = number;
    this.member = [];
    this.teacher = null;
  }

  assignLeader(student) {
    if (this.hasStudent(student.id)) {
      this.leader = student.id;
      if (this.teacher) {
        this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${student.clazz.number}`);
      }
      return 'Assign team leader successfully.';
    }
    return 'It is not one of us.';
  }

  appendMember(student) {
    this.member.push(student.id);
    if (this.teacher) {
      this.teacher.notifyStudentAppended(`${student.name} has joined Class ${student.clazz.number}`);
    }
  }

  hasStudent(id) {
    return this.member.includes(id);
  }
};
