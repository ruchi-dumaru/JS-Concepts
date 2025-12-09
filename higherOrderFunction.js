//   node higherOrderFunction.js

// const arr =[2,3,6,9,10]

// //to transform the function we use map function

// double =(num)=>{
//  return num*2
// }

// const result= arr.map(double)
// console.log(result)

// const arr1=[2,3,4,5,6]

// triple=(x)=>{
//   return x*3
// }

// const output=arr1.map(triple)
// console.log(output)


// const r=arr.map(binary=(n)=> n.toString(2))
// console.log(r)

const arr =[2,3,6,9,10]

let output=arr.filter(isOdd=(x)=>x%2)


console.log(output)


const r= arr.filter(gt4=(x)=>x>4)
console.log(r)