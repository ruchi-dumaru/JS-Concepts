/** Arithmetic or mathematical operators
 * +,-,*,/,%
 * increment or decrement
 * ++,--
 */

// a=a+1//++a or a++
// a=a-1//--a or a--

// let a=10;
// let b=20;

// b++//21
// ++b//22
// // console.log(b)//22
// // console.log(b++)//22
// // console.log(++b)//24

// ++a//11
// a++//12 ho 11 print garxa

// console.log(a++)//13 ho 12 print hunxa
// console.log(++a)//14

/**
 * Assignment
 * +=.-=,/=,*=,%=
 */

/**
 * string Concatination
 */

let x=10
// let y='10'
// console.log(x+y)//+ string concatinaton operator + sum operator

/**comparison
 * <,>,<=,>=,!=,===.!==
 * === and !== check value + datatypes
 */


let a=10
let b='10'

// console.log(a==b)//true
// console.log(a===b)//false



/**logical operators
 * &&,||,!
 */

// console.log(true&& true)//true
// console.log(true||false)//true
// console.log(!true)//false
// console.log(!false)//true

// // /**
//  * Conditional/Ternary
//  * Nullish colleaching
//  * Template Literals
//  * ArrayObject Destructure
//  * Spread and Rest
//  */

//In react we use conditional statement not if-else st

/**
 * Conditional/ternary
 * (expression)?code:codeblock
 */

// let user={
//   ages:22
// }

// let result=(user.age>=18)?("can vote"):("cannot vote")

// console.log(result)

// let age=user.age ?user.age:null;

/**Nullish colleaching:
 * <input value={data ??null}

 *let age=user.age??null;
 *console.log(age)
 */


 /**
  * Template literals:JS variable parse garnu paryo
  * ,output pani formatted form ma chayo then we use it
  */
// // let name="Ruchi";
// let email="ruchidumaru@gmail.com";
//  let templates =`
// Dear ${name},
//             Your email ${email} has been registered
//             Thank You for registering!!`

//console.log(templates)

/**
 * Object / Array destructure
 * Destructuring:Arr bata variable ma convert garnea
 * 
 */

// let userName=["Ruchi","Dumaru"]
// let firstName=userName[0]
// let lastName=userName[1]

//console.log(userName[0]+" "+userName[1])


//arr destructure
//react ma fucntion lea array return garxa,we destruct array instead of storing array in variable in index form

// let [firstName,lastName]=["Ruchi","Dumaru","bkt"];

// let userInfo1={
//   name:"ruchi",
//   email:"ruchidumaru.dev@gmail.com",
//   address:"bkt",
//   ph:9800000000


// let {name,ph,email:emailId,address:location}=userInfo//Object destructuring
// console.log(name,emailId,location,ph)

// let name=userInfo.name;
// let emailId=userInfo.email;
// let location=userInfo.address;
// let ph=userInfo.ph;

/**
 * Spread/Rest :shallow copy
 * ...
 * 
*/

// let userInfo={
//   name:"ruchi",
//   email:"ruchidumaru.dev@gmail.com",
//   address:"bkt",
//   ph:9800000000,
//   car:{
//     brand:"bmw M5",
//     brand1:"porche"
//   }
  
// }

//let userObj=userInfo //refrence is assigned instead of value so same memory address is being shared by both...
// userObj.name="tiya"
//console.log(userInfo)//name:"tiya"

//rest operator 
// copy the value of top level but copy the reference of nested object

// let userInfo2={...userInfo}//assign copy of userInfo(object)so no change will reflect to source obj
// userInfo2.name="NoUpdated";
// userInfo2.address="Bhaktapur";
// console.log(userInfo)//no change

// userInfo2.car.brand1="bugatti"
// console.log(userInfo)//get changed nested obj in source obj


/**
 * so for deep copy :JSON.stringify()
 * 
 */


// let userInfo={
//   name:"ruchi",
//   email:"ruchidumaru.dev@gmail.com",
//   address:"bkt",
//   ph:9800000000,
//   car:{
//     brand:"bmw M5",
//     brand1:"porche"
//   }
  
// }

// let jsonStr=JSON.stringify(userInfo)//return string no reference
// let obj=JSON.parse(jsonStr)//change to object

// let obj=JSON.parse(JSON.stringify(userInfo))

// obj.car.brand1="classic steath 350(royal enfield)"
// obj.address="bhaktapur"
// console.log(userInfo)
// console.log(obj)

//node operators.js



let userInfo={
  name:"ruchi",
  email:"ruchidumaru.dev@gmail.com",
  address:"bkt",
  ph:9800000000,
  car:{
    brand:"bmw M5",
    brand1:"porche"
  }
  
}

//destructering using spread operator remaining key value will be obj form
let{name,ph,email:emailId,...remaining}=userInfo;
console.log(name,ph,emailId)
console.log(remaining)


/**
 * bitwise operator
 * &|
 * 
 */

console.log(4 & 5)//4
console.log(4|5)
// 0100
// 0101

// -----0100-->4
