//Js run in 4 steps: R E P E L
//R: Read(syntax mistake,err)
//e:evaluate(interperate)
//p: process
//l: loop


//hoisting :excessing the variable before its initialization
var name;
// console.log(name)//undefined

// console.log(address)//err

var name="ruchi"//initialize in this line but declaration is at the top
var name="osis"
let address="bhaktapur"//initialization and declaration is at the same line




// //in var we can excess variable before initilization 
// main difference between var and let :
// var :hoisting ,redeclaration,reassignment,global scope
// //let:no hoisting and no redeclaration but can reassign,block scope

//scope
//global
//local
//block


//var has global scope
// var a=10;
// console.log(a)//-->10

// {
//   var a=20
//   console.log(a);//-->20
// }
// console.log(a)//-->20

//let -es6(mostly used)
//let has both global and local scope
let b=10
{
   b=20
  console.log(b)//-->20
}
console.log(b)//--->20

//constants,empty value rakhna paidaina
const PI =3.14


