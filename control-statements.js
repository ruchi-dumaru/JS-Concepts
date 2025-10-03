/**
 * Decision making statements
 * if-else
 * else-if
 * switch-case
 * loop
 *  do-while
 *  while
 *  for
 *  for-in
 *  for-of
 */

// if-else =>yes or no 
//expression->truthy value
//falsy value => 0 ,false,undefined,NaN,null,'',variable but empty or having any of these values

// if(expression){
//   //body
// }else{

// }

let day="Sunday";

// if (day==="sunday"|| day==="saturday"){
//   console.log("holiday")
// }
// else{
//  if  (day==="friday"){
//     console.log("weekend")
//   }
//   else{
//     console.log("weeday")
//   }
// }

// switch(day){
//   case "Sunday":
//   case "Saturday":
//     console.log("holiday")
//     break;

//   case "monday":
//     console.log("weekday") 
//     break;

//   default:
//     console.log("weekday")
//     break;
// }

// let std={
//   name:"ruchi",
//   scoreObtained:490,
//   total:500
// }

// std.percentage= std.scoreObtained/std.total*100;
// let key='division'

// if(std.percentage>=80){
//   console.log("Distinction")
//   student[key]='distinction'
//   student.division='distinction'
//   student['division']='distinction'
// }

// else if (std.percentage>=60 && perentage<=80){
//  console.log("1st division")
// }

// else if (std.percentage>=45 && perentage<=60){
//  console.log("2nd division")
// }

// else if(std.percentage>=32 && percentage<=45){
//  console.log("3rd ivision")
// }

// else{
//   console.log("failed")
// }

// console.log(std)


let allStudents=[
  {
    name:"std 1",
    subjects:[
      {name:"english",score:90},
      {name:"math",score:100},
      {name:"chemistry",score:98},
      {name:"physics",score:95}
    ]
  },

  {
    name:"std 2",
    subjects:[
      {
name:"english",score:80},
      {
 name:"math",score:100},
      {
name:"chemistry",score:88},
      {
name:"physics",score:95}
    ]
  },

  {
    name:"std 3",
    subjects:[
      {name:"english",score:79},
      {name:"math",score:70},
      {name:"chemistry",score:69},
      {name:"physics",score:90}
    ]
  },

  {
    name:"std 4",
    subjects:[
      {name:"english",score:89},
      {name:"math",score:70},
      {name:"chemistry",score:89},
      {name:"physics",score:90}
    ]
  },
  {
    name:"std 5",
    subjects:[
      {name:"english",score:39},
      {name:"math",score:70},
      {name:"chemistry",score:39},
      {name:"physics",score:20}
    ]
  },
]

//consider each of total 100 for each subject and pass score is 45

//find who are passssed and failed
//out put should be like
//std 1:Fail
//std 2:Pass

// console.log(allStudents[0].subjects[0].score)
// console.log(allStudents[4].subjects[1].name)

let students=[]


if (allStudents[0].subjects[0].score>=45 && allStudents[0].subjects[1].score>=45 && allStudents[0].subjects[2].score>=45 && allStudents[0].subjects[3].score>=45 ){
  students.push({
    name:allStudents[0].name,
    status:"passed"
  })
}
else {
  students.push({
    name:allStudents[0].name,
    status:"failed"
  })
  
}
console.log(students)


// if (allStudents[1].subjects[0].score>=45 && allStudents[1].subjects[1].score>=45 && allStudents[1].subjects[2].score>=45 && allStudents[1].subjects[3].score>=45 ){
//   console.log(allStudents[1].name +": passed")
// }
// else {
//   console.log(allStudents[1].name +": failed")
// }


// if (allStudents[2].subjects[0].score>=45 && allStudents[2].subjects[1].score>=45 && allStudents[2].subjects[2].score>=45 && allStudents[2].subjects[3].score>=45 ){
//   console.log(allStudents[2].name +": passed")
// }
// else {
//   console.log(allStudents[2].name +": failed")
// }

// if (allStudents[3].subjects[0].score>=45 && allStudents[3].subjects[1].score>=45 && allStudents[3].subjects[2].score>=45 && allStudents[3].subjects[3].score>=45 ){
//   console.log(allStudents[3].name +": passed")
// }
// else {
//   console.log(allStudents[3].name +": failed")
// }

// if (allStudents[4].subjects[0].score>=45 && allStudents[4].subjects[1].score>=45 && allStudents[4].subjects[2].score>=45 && allStudents[4].subjects[3].score>=45 ){
//   console.log(allStudents[4].name +": passed")
// }
// else {

//   console.log(allStudents[4].name +": failed")
// }

// let i;
// for (i=0;i<5;i++){
  
// if (allStudents[i].subjects[0].score>=45 &&
//     allStudents[i].subjects[1].score>=45 &&
//     allStudents[i].subjects[2].score>=45 &&
//     allStudents[i].subjects[3].score>=45 ){
//   console.log(allStudents[i].name +": passed")
// }else {
//   console.log(allStudents[i].name +": failed")
// }
// }