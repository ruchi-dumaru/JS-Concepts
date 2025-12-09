//promise is an object
//delay code
// 3 stages of promise
//pending operate
//Fulfilled,rejected
// Settlement

//we have to build function and handle it
// async function are promise based

// const promObj = new Promise((res,rej)=>{
//   console.log("pending of promise");
//   res("I have been respond...");
//   //rej("I have been rejected...");
// })

// let loading=true;
// promObj
//   .then((resData)=>{
//     console.log("Resolve:",resData)
//   })

//   .catch((rejData)=>{
//     console.log("Reject:",rejData)
//   })

//   .finally(()=>{
//     console.log("I am always executed...")
//     loading =false;

//   })

//   console.log("last statement");

//   const promiseObj=new Promise((res,rej)=>{
//     setTimeout(()=>{
//       console.log("Async function");
//       res("I am resolve")
//     },1000)
//   })

//  promiseObj
//  .then((resArg)=>{
//   console.log(resArg)
//  })

//  const PromiseOne= new Promise((res,rej)=>{
//    setTimeout(()=>{
//     console.log("Async function")
//     rej("Promise rejected")
//     res("Promise consumed")
//    },1000)
//  })

//  PromiseOne
//     .then((resInfo)=>{
//      console.log("resolve:",resInfo)
//     })

//     .catch((rejInfo)=>{
//   console.log("reject:",rejInfo)
//     })

//     .finally(()=>{
//       console.log("I am always executed")
//     })

// const promiseTwo=new Promise((res,rej)=>{
//   setTimeout(()=>{
//     console.log("Async function")
//     res({name:"Ruchi",status:"Billionaire"})

//   },1000)
// })

// promiseTwo
//   .then((resInfo)=>{
//     console.log(resInfo)
//     return resInfo.name
//   })

// console.log(result)//err

// const promiseThree=new Promise((res,rej)=>{
//  setTimeout(()=>{
//   let error =false
//   if (error!=true){
//     res({name:"harry",surName:"potter"})
//   }else{
//     rej("Smth went wrong!")
//   }
//  },1000)

// })

// promiseThree
// .then((resInfo)=>{
//   console.log(resInfo)
//   return resInfo.name
// })
// .then((nameInfo)=>{
//   console.log(nameInfo)
// })
// .catch((rejInfo)=>{
//   console.log(rejInfo)
// })
// .finally(()=>{
//   console.log("Always run")
// })

// const promiseFour = new Promise((res, rej) => {
//   setTimeout(() => {
//     let error = true;
//     if (error != true) {
//       res({ name: "Javascript", password: "123" });
//     } else {
//       rej("JS went wrong!");
//     }
//   }, 1000);
// });

// async function ConsumepromiseFour() {
//   try {
//     const respond = await promiseFour;
//     console.log(respond);
//   } catch (error) {
//     console.log(error);
//   }
// }

// ConsumepromiseFour();

// const promiseFive = new Promise((res, rej) => {
//   setTimeout(() => {
//     let balance = 300;
//     if (balance >= 500) {
//       res({ name: "kasis", balance: "500" });
//     } else {
//       rej("Balance less than 500!!");
//     }
//   }, 2000);
// });

// async function consumepromiseFive() {
//   try {
//     const respond = await promiseFive;
//     console.log("Account holder:", respond.name, "Balance:", respond.balance);
//   } catch (error){
//     console.log(error);
//   }
// }

// consumepromiseFive()

const func1= async ()=>{
  return "I am resolve";
  //throw "I am reject";
}

func1 ()
.then((resData)=>{
console.log(resData)
})
.catch((error)=>{
console.log(error)
})

//develop 3 js async functin having one param on each,return if param is true,else throw exception with proper message to identify from which fucntion the return or reject is,

// now,
// assume,
// the second func is always depends on 1st func,
// the third function is alays depends on 2nd function 

//print the execution of each dependent function


// 1️⃣ Function 1
function func1(value) {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve("func1: Success");
    } else {
      reject("func1: Failed");
    }
  });
}

// 2️⃣ Function 2 (depends on func1)
function func2(value) {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve("func2: Success");
    } else {
      reject("func2: Failed");
    }
  });
}

// 3️⃣ Function 3 (depends on func2)
function func3(value) {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve("func3: Success");
    } else {
      reject("func3: Failed");
    }
  });
}


// 🔥 PROPER CHAINING STARTS HERE
func1(true)
  .then(result1 => {
    console.log(result1);
    return func2(true);       // chaining
  })
  .then(result2 => {
    console.log(result2);
    return func3(true);       // chaining
  })
  .then(result3 => {
    console.log(result3);
    console.log("All executed in chain ✔️");
  })
  .catch(error => {
    console.log("Error:", error);
  });
