

const func1 = (val) => {
  return new Promise((res, rej) => {
    console.log("I am in func1");
    if (val) {
      res("I am resolve in func1");
    } else {
      rej("I am reject in func1");
    }
  });
};

const func2 = (val) => {
  return new Promise((res, rej) => {
    console.log("I am in func2");
    if (val) {
      res("I am resolve in func2");
    } else {
      rej("I am reject in func2");
    }
  });
};

const func3 = (val) => {
  return new Promise((res, rej) => {
    console.log("I am in func3");
    if (val) {
      res("I am resolve in func3");
    } else {
      rej("I am reject in func3");
    }
  });
};


//nesting of promise for dependencies(tree structure)
// func1(false)
//   .then((resInfo1) => {
//     console.log("resolve1:", resInfo1);
//     func2(true)
//       .then((resInfo2) => {
//         console.log("Resolve2:", resInfo2);
//         func3(true)
//           .then((resInfo3) => {
//             console.log("Resolve3:", resInfo3);
//           })
//           .catch((exception) => {
//             console.log("exception:", exception);
//           });
//       })
//       .catch((exception) => {
//         console.log("exception:", exception);
//       });
//   })
//   .catch((exception) => {
//     console.log("exception:", exception);
//   });


// chaining
//  func1(false)
//  .then((res1)=>{
//   console.log(res1)
//   return func2(true)
//  }) 
//  .then((res2)=>{
//   console.log(res2)
//   return func3(true)
//  })
//  .then((res3)=>{
//   console.log(res3)
//  })
// .catch((exception)=>{
//  console.log(exception)
// })  


//chaining using async await 

// async function handlePromise(){
//    try{
//     const res1= await func1(true)
//    console.log(res1)

//    const res2 = await func2(false)
//    console.log(res2)

//    const res3=await func3(true)
//    console.log(res3)

//    }
//    catch(error){
//      console.log(error)
//    }
// }

// handlePromise()

//IIFE-Immediately Invocable Function Expresssion

// (const fun=()=>{
// // })()

// (async ()=>{
//     try{
//     const res1= await func1(true)
//    console.log(res1)

//    const res2 = await func2(false)
//    console.log(res2)

//    const res3=await func3(true)
//    console.log(res3)

//    }
//    catch(error){
//      console.log(error)
//    }
// })()

const loadUser=(id)=>{
  return new Promise((res,rej)=>{
    console.log("I am in loadUser")
    if(id){
      res("id valid")
    }else{
      rej("smth went wrong1")
    }
  })
};

const loadPosts=(userId)=>{
 return new Promise((res,rej)=>{
  console.log("I am in loadPosts");
  if(userId){
    res("Correct userId")
  }else{
    rej("Smth went wrong2!!")
  }
 })
};


const loadComments=(postId)=>{
 return new Promise((res,rej)=>{
  console.log("I am in loadComments");
  if(postId){
    res("Correct postId")
  }else{
    rej("Smth went wrong3!!")
  }
 })
};


(async()=>{
  try{
    const res1=await loadUser(true)
    console.log(res1)

    const res2=await loadPosts(false)
    console.log(res2)

    const res3=await loadComments(true)
    console.log(res3)
  }catch(error){
 console.log(error)
  }
})()

