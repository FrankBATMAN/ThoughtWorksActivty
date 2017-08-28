"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");
var add = require("../lib/addStudent.js");
var printSheet = require("../lib/printSheet.js");
var Student = add.Student;
var addStudent = add.addStudent;


describe("commandApp", function(){
    sinon.spy(console, 'log');

    const studentStr = `chris,1,1班,数学:99,英语:66,语文:66,编程:99`;
    const errorStudentStr = `chris,1,1班,数学:100,英语,100,语文:100,编程:99`;

    it('return Student when given student String ,the format is correct', () => {
        let result = addStudent(studentStr);
        let expected = new Student("chris", "1", "1班",[{"course":"数学", "score":99}, {"course":"英语","score":66}, {"course":"语文","score":66}, {"course":"编程","score":99}]);
        expect(expected).to.deep.equal(result);
    });

    it('return Student when given student String ,wrong format', () => {
        let result = addStudent(errorStudentStr);
        expect(false).to.equal(result);
    });
});
describe('result', () => {
    const student = `chris,10,1班,数学:80,英语:90,语文:100,编程:99`;
    const student1 = `chris2,11,1班,数学:66,英语:77,语文:99,编程:100`;
    const student2 = `chris3,12,1班,数学:99,英语:98,语文:77,编程:86`;
    const student3 = `chris4,13,1班,数学:99,英语:88,语文:55,编程:32`;
    let students = [];

    beforeEach(() => {
        students.push(addStudent(student));
        students.push(addStudent(student1));
        students.push(addStudent(student2));
        students.push(addStudent(student3));
    });

    it('return transcript when given student no,the format is correct', () => {
        let noStr = "10,11";
        let result = printSheet(students, noStr);
        expect(`成绩单
姓名|数学|英语|语文|编程|平均分|总分
========================
chris|80|90|100|99|92.25|369
chris2|66|77|99|100|85.5|342
========================
全班总分平均数：336.25
全班总分中位数：351`).to.equal(result);
    });
});

