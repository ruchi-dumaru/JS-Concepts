//function defined in side a function is called closure
//react ma closure matra use hunxa
//function can recevie anything as an input and give anything as an output

//example of dependencies
// const func1=()=>{
//   console.log("I am inside func1")
//   return "From func1"
// }

// const func2=(params)=>{
//   console.log("I received"+ params)
// }


// func2(result)//err
// let result= func1()
// func2(result)//


// const func1=()=>{
//   console.log("I am inside func1")
  

//   const func2=(params)=>{
//     console.log("I received"+ params)
//     //return undefined
//   };

//    return func2("From func1")

// }
// let result=func1()
// console.log(result)//undefined //demerit of closure



//closure or lexical scope
// const func1=()=>{
//   console.log("I am inside func1")
  

//   const func2=(params)=>{
//     console.log("I received"+" "+params)
//     //return undefined
//   };

//    return func2
//    //return " from func1"
//    /**
//     * 2 returns not allowed so return and call to combine both we use callback function
//     */

// // }
// let result=func1()
// result("Result become func2")


// const func1=(cb)=>{
//   console.log("I am inside func1")

//   cb(" by func1")

//   return "Hello there!!"
  
// }
// const func2=(params)=>{
//   console.log("I received"+ " "+params)
//   //return undefined
// };

// let result=func1(func2)
// console.log(result)



//callback hell
// const func1=(cb2)=>{
//   console.log("func1 ko")
//   cb2(func3)
  
// }


// const func2=(cb3)=>{
//   console.log("func2 ko")
//   cb3(func4)
  
// }


// const func3=(cb4)=>{
//   console.log("func3 ko")
//   cb4(()=>{
//     console.log(" inside func 4")
//   })
// }

// const func4=(cd)=>{
//   console.log("func4 ko")
//   cd()
// }
// func1(func2)

//