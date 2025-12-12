// class Std{
//   name;
//   age;
//   #roll;
//   branch

//   stdAdmission(){}

//   stdStudy=()=>{}
//   constructor(_name,_age,_roll,_branch,grade){
//     console.log("Auto called");
//   this.name=_name;
//   this.age=_age;
//   this.#roll=_roll;
//   this.branch=_branch;
//   //this.grade=_grade;//public property of this class
//   }
//   getRoll(){
//     return this.#roll
//   }
// }

// const objStd=new Std("Juliet",20,110,"CS","A")

// objStd.name="Juliet";
// objStd.age=20;
// objStd.roll=110;
// objStd.branch="CS"

// console.log(objStd);
// const r=objStd.getRoll()
// console.log("roll:",r)

// objStd.stdAdmission()
// objStd.stdStudy()


function User(name,login,pw){
  this.name=name;
  this.login=login;
  this.pw=pw;

 return this;
}

const user1=  new User("ashi",true,123);
const user2= new User("kashis",false,"abc")
console.log(user1);
console.log(user2);