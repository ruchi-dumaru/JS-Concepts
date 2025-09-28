/**
 * string
 * "",'',``
 */

// let a="";
// let b='';
// let c=``;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

/**
 * Numbers
 * integer,float,bigInt
 * 
 */

// let d=123;
// let e=12.2;
// let f=1e23;
// let g=NaN;


// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);

// let h=null
// console.log(typeof h); //object

//note :*** every datatype in js is considered as an object ***

//falsy value:
//~null,0,'',"",``,false,undefined

//eg.
//string are immutable so toUpperCase will not modify original string instead return new string

// let name="ruchi"
// let n1=name.toUpperCase()
// console.log(n1)

// let floatNumb=123.23456
// let f=floatNumb.toFixed(2)
// console.log(f)

/**
 * Boolean(flag)
 * true or false
 */

/**
 * undefined
 */

/**
 * js is light weight programming as if variable is only declared not initialized then it value will be undefined
 * if var is undefined then that will not occupy any memory in RAM(primary memory)
 * js is dynamically typed and loosely coupled type
 * let k;-->undefined
 */

/**
 * pure formed datatype[primitive datatype]
 * string
 * number
 * boolean
 * null
 * undefined
 */

//Derived datatype:derived from other datatype(mixed datatype)
/**
 * Array[]
 * 
 */

//application 
//a user

// let fName=""
// let email=""
// let address=""
// let ph=""
[0,1,2,3]
//
// let employee=["abc","abc@gmail.com","bkt",9000000]
// console.log(employee[0])
// console.log(employee)


//Array type
/**
 * single dimensional
 * let arr=[no func,no obj,no json]
 * 
 * multi dimensional
 * let arr=[[],{},func]
 */

// //single dimensional
// let myProfile=["Ruchi Dumaru","ruchi@gmail.com",98000000,61000000]

// //multi dimensional
// let myProfile1=["Ruchi Dumaru","ruchi@gmail.com",[98000000,61000000]]
// console.log(myProfile1[0]);
// console.log(myProfile1[2][0]);

//Array doesn't give information but when we use it then it will give
//array is used as data colletion not as information

/**
 * object
 * 
 */

let product={
  name:"samsung S25",
  brand:"samsung",
  price:200000,
  discount:20,
  stock:2
}

// object convet data into information
// store info of data(entities) we make object
// if alot of entities are alot then we make array of object

//mixed
let allProducts=[{
   name:"samsung S25",
  brand:"samsung",
  price:200000,
  discount:20,
  stock:2
},
{
 name:"iPhone 17",
   brand:"apple",
   price:200000,
   discount:20,
   stock:9
}
];

// console.log(allProducts)
// console.log(allProducts[0])

// console.log(allProducts[0].name)
// // console.log(allProducts[1]['brand'])
// console.log(allProducts)


//Object:js has default class called object ,to excess use . or []


/**
 * function:datatype
 * we can assign fucntion to variable so called function as datatype in javascript
 */

// const getName=function(){}
// const getUserName=()=>{}

//Set:give unique values that are not repeated
// let arrData=[1,2,3,45,67,8,90,2,3,45]
// const unique=new Set(arrData)
// console.log(unique)


let obj={
 key:"bmw M5",
 key:"Bugatti maclern"
}

// console.log(obj.key)
// const symbol=Symbol("key")//generate unique key


// obj={
//   [symbol]:"value"
// }
// console.log(obj.key)

let date=new Date()
console.log(date)

// let objData={} //JSON
//JSON:object notation of js as string
//JSON is universal datatype as it can be excessed or parsed by every programming language

let objData=JSON.stringify(allProducts)
let reverseJson =JSON.parse(objData)
// console.log(objData[2])//gives [
console.log(reverseJson[2])


//for js:json is native data structure for other we have to parse