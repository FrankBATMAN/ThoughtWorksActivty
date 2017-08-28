"use strict";
function Student(name, id, classId, courses){
    this.name = name;
    this.id = id;
    this.classId = classId;
    this.courses = courses;
    this.sum = sumScore(courses);
    this.average = aveScore(courses);
}

function sumScore(results) {
    return results.reduce((sum, result) => {
      return sum + result.score;
    }, 0.0)
}
function aveScore(results) {
   return sumScore(results) / results.length * 100 / 100;
}

function checkFormat(str){
   return checkLengthFormat(str) && checkScoresFormat(str);
}

function checkLengthFormat(str){
  return str.split(',').length > 4;
}

function checkScoresFormat(str){
    let results = str.split(",").splice(4, str.split(",").length);

    for (let result of results) {
        if (result.split(":").length !== 2) {
            return false;
        }
    }

    return true
}

function getCourse(course) {
    return {
        "course": course.split(":")[0],
        "score": parseInt(course.split(":")[1])
    };
}

function getCourses(courses) {
    let result = [];

    for (let course of courses) {
        result.push(getCourse(course))
    }

    return result;
}

function formatStudent(str) {
    let info = str.split(",");
    let detail = info.splice(0, 3);
    let courses = getCourses(info);

    return new Student(detail[0], detail[1], detail[2], courses);
}

function addStudent(str) {
    if (checkFormat(str)) {
        let student = formatStudent(str);
        return student;
    }

    return false;
}

module.exports = {
    addStudent,
    Student,
}
