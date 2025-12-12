// function setName(username){
//   this.username=username;
//   console.log("call")
// }

// function createName(email,pw){
//   setName.call(this, username)
//   this.email=email;
//   this.pw=pw;
// }
// const obj= new createName("ashi","ashi@gmail.com","123");

// console.log(obj);

// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);

const car={
  name:"bmw",
  model:"s1000 r"
}

console.log(Object.getOwnPropertyDescriptor(car,'name'));

Object.defineProperty(car,'name',{
  writable:false,
  enumerable:false,
})


console.log(Object.getOwnPropertyDescriptor(car,'name'));