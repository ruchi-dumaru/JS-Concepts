
/*
A new object is created: The nw keyword initiates the creation of new JavaScript object.

A prototype is linked:The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with specified arguments and this is bound to the newly created object.If no explicit return value is specified from the constructor ,Javascript assumes this, the newly cerated object,to be intended return value.

The new object is returned:After the con structor function has been called, if it doesn't return a non-primitive value (object,array,fucntion,etc),the newly cerated object is returned.

*/

/*
data-types

(global,blocked,functional)
var =10;
{
  let b=12;
}

function abc(){
  if(true){
    var c=20;
  }
}


### redeclaration and reassignment

var
  -es5 
  -function scoped
  - we can access variable anywhere in function
  -can redeclare same variable and error is not occured
  -reassignment is allowed
  -window ma add hunxa


let
  -es6
  -blocked scoped
  -cannot redeclared,cause error
  -reassignment is allowed


*/


### Temproal dead zone:(let,const ma hunxa)

the specific area where js know that the variable exist but can't give it's value
example:

console.log(a);
//reference error: a is not defined

console.log(b)
let b=10; //cannot excess b before initialization / no error occured

But in case of var:(hoisting is occured)
console.log(b)
var b=10; // undefined...


### HOISTING
  -JS divide the variable into two parts:declaration part moves at the top and initialization remains down
  -It means variable is created in memory before code runs

i.e var a=undefined
console.log(a)

var a=10--->this will get divided into:
var a=undefined--> move to top 
a=10


Var
  -Var hoisted huncha
  -Var accessible huncha anywhere in its function scope
  -Var variable initialize huncha undefined value sanga hoisting ko time ma
  -Var variable can be accessed before its declaration


Let

Let hoisted huncha
Let variable accessible hudaina before its declaration
Let variable initialize hudaina hoisting ko time ma
JavaScript let variable lai temporary dead zone ma rakcha
JavaScript lai thaha cha variable exist garxa but it cannot give value of variable until initialization of variable code line run itself


const
  -we can update the value in const but we cannot reassign value

////obj.freeze


### Datatypes
//primitives-> those values that give real copy when they are copied
(string,boolean,number,null,undefined,sy,bol,bigint)

//reference-> no real copy is given while copying
(array,objects,functions)
[],{},()



