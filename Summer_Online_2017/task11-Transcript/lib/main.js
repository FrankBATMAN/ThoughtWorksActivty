var readlineSync = require('readline-sync');
var addStudent = require('./addStudent.js');
var printSheet = require('./printSheet.js');


const menu = `
1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：
`
const addStudentQuery = "请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：";
const errorAddStudentQuery = "请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：";
const printSheetQuery = "请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：";
const errorPrintSheetQuery = "请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：";

function addSuccess(student) {
    console.log(`\n学生${student.name}的成绩被添加\n`);
}

function question(queryText){
  return readlineSync.question(queryText);
}

function main(){
  const students = [];
  while(true){
    var choose = question(menu);
    switch (choose) {
        case '1':
            var student = question(addStudentQuery); 
	    while(true){
	      student = addStudent.addStudent(student);
              if(student){
		 students.push(student);
		 addSuccess(student);
		 break;
              }else{
                 student = question(errorAddStudentQuery);
              }
	    };
            break;
	case '2':
            var idStr = question(printSheetQuery);
            while(true){
              var scoreSheet = printSheet(students, idStr);
              if(scoreSheet){
                 question(scoreSheet);
                 break;
              }else{
                 idStr = question(errorPrintSheetQuery);
              }
            };
	    break;
	case '3':
	    break;
        default :
          break;
    }
  }
}

module.exports = main;
