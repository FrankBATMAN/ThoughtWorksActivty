function printSheet(students, idStr){
  let idList = checkIdFormat(students, idStr);
  if(idList.length === 0){ return false}
  let stuTranscript = studentTranscript(students, idList);
  let statisticsTranscript = statistics(students);
  let transcript = join(stuTranscript, statisticsTranscript);

  return transcript;
}

function printTittle(courses) {
    return `成绩单
姓名|${courses.join("|")}|平均分|总分`;
}

function allCourse(students) {
    let result = new Set();

    for (let student of students) {
        for (let course of student.courses) {
            result.add(course.course);
        }
    }

    return [...result];
}

function average(students) {
    let totalScore = students.reduce((sum, student) => sum + student.sum, 0);

    return totalScore / students.length;
}

function statistics(students) {
    return `
全班总分平均数：${average(students)}
全班总分中位数：${median(students)}`
}

function join(studentTranscript, statisticsTranscript) {
  return studentTranscript + statisticsTranscript;
}

function getScore(student, course) {
    let results = student.courses;
    for (let result of results) {
        if (course === result.course) {
            return result.score;
        }
    }
    return 0;
}


function printStudentScores(students, courses) {
    let result = [];
    students.map(student => {
        let scores = [];
        courses.map(course => {
            scores.push(getScore(student, course));
        });
        result.push(`${student.name}|${scores.join("|")}|${student.average}|${student.sum}`);
    });

    return result.join("\n");
}
function filterStudent(students, noArr) {
    return students.filter(student => noArr.includes(student.id));
}
function studentTranscript(students, noArr) {
    let courses = allCourse(students);
    let title = printTittle(courses);
    students = filterStudent(students, noArr);
    let studentScore = printStudentScores(students, courses);
    return title + `
========================
${studentScore}
========================`;
}

function getMedian(result) {
   return result.length % 2 === 0 ? (result[parseInt(result.length / 2)] + result[parseInt(result.length / 2 - 1)]) / 2
           : result[Math.floor(result.length / 2)];
}

function median(students) {
    let result = [];
    for (let student of students) {
       result.push(student.sum);
    }
    return getMedian(result);
}

function checkIdFormat(students, idStr){
	let idArr = idStr.split(",")
	let result = []
	students.forEach((ele) =>{
	    if(idArr.indexOf(ele.id) !== -1){
	       result.push(ele.id);
	    }
	})
        return result;
}

module.exports = printSheet;
