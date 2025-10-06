for (let i=1;i<=10;i++){
  console.log(i)
}

let i=1
while( i<=10){
  console.log(i);
  i++;
}

do{
  console.log(i)
  i++
}while(i<=10);



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
  
]

for (let i=0;i<allStudents.length;i++){
  console.log(allStudents[i].name)
  
  for(j=0;j<allStudents.length;j++){

    
        console.log(allStudents[i].subjects[0])//0 0
         console.log(allStudents[i].subjects[1])//0 0
          console.log(allStudents[i].subjects[2])//0 0
           console.log(allStudents[i].subjects[3])
      
  }

 


node loop.js


for (let i=0;i<allStudents.length;i++){
  console.log(allStudents[i].name)
  for (let j=0;j<allStudents[i].subjects.length;j++)
  console.log(allStudents[i].subjects[j])
  console.log(allStudents[i].subjects[j])
  console.log(allStudents[i].subjects[j])
  console.log(allStudents[i].subjects[j])
}

for (let i=0;i<allStudents.length;i++){
  console.log(allStudents[i].name)

  for(let j=0;j<allStudents[i].subjects.length;j++){
    console.log("    "+allStudents[i].subjects[j].name+" : "+allStudents[i].subjects[j].score)

  }

  // console.log(`    ${allStudents[i].subjects[j].name} : ${allStudents[i].subjects[j].score}`)
 
}


let std=[
  {
  name:"sim jo ren",
  age:90,
  brand:[
    {name1:"rolls royce",brand:2015},
    {name1:"porche",brand:2010}
  ],
},

{
  name:"sen ha ri",
  age:50,
  brand:[
    {name1:"bmw royce",brand:2015},
    {name1:"bugatti",brand:2010}
  ],
},
]

// console.log(std[0])
console.log(std[0].brand[0])//---->{ name1: 'rolls royce', brand: 2015 }
console.log(std[1].brand[0])
console.log(std.length)//2

for (let i=0;i<std.length;i++){
  console.log(" name"+" : " +std[i].name)

  // console.table(std[i])

  for (let j=0;j<std[i].brand.length;j++){
    // console.log(std[i].brand[j])
     console.log(`${std[i].brand[j].name1} : ${std[i].brand[j].brand}`)

    console.table(std[i].brand[j])

    //output: name : sim jo ren
{ name1: 'rolls royce', brand: 2015 }
{ name2: 'porche', brand: 2010 }
 name : sen ha ri
{ name1: 'bmw royce', brand: 2015 }
{ name2: 'bugatti', brand: 2010 }

  }
}


let k=1;
for(;;){
  if(k>10){
    break;
  }
  console.log(k);
  k++;
}


for (l=1;l<=10;l++){
  console.log(l)
}


for (i=1;i<=20;i++){
  if(i%2==0){
    console.log(i);
  }else{
    continue;
  }
}

for (i=1;i<=20;i++){
  if(i%3==0){
    console.log(i)

  }
}

for (i=10;i>=1;i--){
  console.log(i)
}

for (i=1;i<=5;i++){
  console.log(i*i)
}

let n=5;
for(i=1;i<=10;i++){
  console.log( `${n} * ${i}: ${n*i}`)
}

for (let i=0;i<=10;i++){
  if(i==5){
    continue;
  }else{
    console.log(i)
  }
}

for (let i=1;i<=30;i++){
  if (i%2==0 && i%3==0){
    console.log(i)
  }else{
    continue
  }
}

let fruits = ["apple", "banana", "mango", "orange"]
for (let i=0;i<fruits.length;i++){
  console.log(fruits[i].length)
}

let sum=0;
let nums = [10, 20, 30, 40, 50]
for (let i=0;i<nums.length;i++){
  sum+=nums[i]
}
console.log(sum)

let nums = [10, 20, 30, 40, 50]

let max=nums[0];
for(let i=0;i<nums.length;i++){
  if(nums[i]>25){
    console.log(nums[i])
  }else{
    continue
  }
}


let nums = [5,10, 20, 30, 40, 50,23,22,99,100]
let count=0;
for (let i=0;i<nums.length;i++){
  if(nums[i]%2==0){
    count++
  }else{
    continue
  }
}
console.log(count)

let nums = [10, 20, 30, 40, 50]

for (let i=nums.length;i>=0;i--)


  let names = ["ram", "shyam", "hari"]
  for (let i=0;i<names.length;i++){
    console.log("hello"+ "  "+names[i])
  }

let stds=[
  {
    name:"fin",
    score:[90,100,100]
  },{
    name:"uio",
    score:[100,20,80]
  }

]

for (let i=0;i<stds.length;i++){
  //console.log(stds[i].name +" "+stds[i].score)
  console.log(stds[i].name)
  let total=0;
  for(let j=0;j<stds[i].score.length;j++){
   total+=stds[i].score[j]
  }
  console.log(total)

}


//show name and subject od std
let students = [
  {
    name: "Ram",
    subjects: ["English", "Math", "Science"]
  },
  {
    name: "Shyam",
    subjects: ["Nepali", "Math", "Computer"]
  }
];

for(let i=0;i<students.length;i++){
  console.log(students[i].name )

  for(let j=0;j<students[i].subjects.length;j++){
    console.log("subject:"+" "+students[i].subjects[j])
  }
}

cal the avg score of each student

let stds = [
  { name: "Ram", scores: [90, 85, 95] },
  { name: "Shyam", scores: [80, 75, 70] },
  { name: "Hari", scores: [88, 92, 84] }
];


for (let i=0;i<stds.length;i++){
  console.log(stds[i].name)
  let avg;
  let total=0;
  for(let j=0;j<stds[i].scores.length;j++){
    total+=stds[i].scores[j]
  }
  avg=total/300*100
  console.log("The avg score of "+ stds[i].name+ "is :"+avg)
}

cal which student has highest score

let topper=null;
let highestScore=0;
for (let i=0;i<stds.length;i++){

  let total=0;
  for(let j=0;j<stds[i].scores.length;j++){
    total+=stds[i].scores[j]
  }
  let avg=total/300*100

  if(avg>highestScore){
    highestScore=avg
    topper=stds[i].name
  }

}

console.log(topper)


print emp with highest salary

let emp=[
  {name:"A",salary:50000000},
  {name:"B",salary:100000},
  {name:"C",salary:20000000}

]

let highestPaid=null;
let highestSalary=0;

for(let i=0;i<emp.length;i++){
 if(emp[i].salary>highestSalary){
  highestSalary=emp[i].salary
  highestPaid=emp[i].name
 }
}
console.log("Highest paid employee is :",highestPaid)


pattern question
*
**
***
****
*****



for (let i=0;i<=5;i++){
  console.log("*")
}


for (let i=1;i<=5;i++){//row
  let star=""
  for(let j=1;j<=i;j++){
 star+="*"
  }
  console.log(star)
}

*****
****
***
**
// *

for(let i=5;i>=1;i--){
  let star=""
  for(let j=1;j<=i;j++){
    star+="*"
  }
  console.log(star)
}

1
12
123
1234
12345

for(let i=1;i<=5;i++)
{
  let pattern=""
  for (let j=1;j<=i;j++){
    pattern+=j;
  }
  console.log(pattern)
}

for(let i=5;i>=1;i--)
{
  let pattern=""
  for (let j=1;j<=i;j++){
    pattern+=j;
  }
  console.log(pattern)
}


     *
    **
   ***
  ****  

  
let row=5
  for (let i=1;i<=row;i++){
    let pat=""
    for(let j=1;j<=row-i;j++){
      pat+=" "
    }
    for(let k=1;k<=i;k++)
    {
      pat+="*"
    }
    console.log(pat)
  }

let row=5



    //  ****
    //   ***
    //    **
    //     *


  
  let rows=4;
  for(let i=4;i>=1;i--){
    let p=""
    for(let j=1;j<=rows-i;j++){
      p+=" "
    }
    for(let k=1;k<=i;k++){
      p+="*"
    }
    console.log(p)
  }


