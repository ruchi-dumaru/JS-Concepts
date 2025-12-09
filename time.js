// setTimeout(()=>{
//   console.log("I am second")
// },3000)


// console.log("I am first")
// //async default create hunxa


// let timer=setInterval(()=>{
//   //console.log(timer)
//  console.log("I am on 1 sec interval")
//  clearInterval(timer)//---> code create hunea bitikai end bho
// },1000)

// let counter =0;

// let timer1 = setInterval(()=>{
//   counter ++ 
//   console.log("I run after a sec")
//   if (counter ==1){
//     setTimeout(()=>{
//       console.log("I am executing....");
//      clearInterval(timer1)
//     },4000)
//   }
// },1000)

// console.log("I run first")

//polling

const addZero =(num)=>((num<10)?'0'+num:num);
setInterval(()=>{
  const date=new Date();
  let hours=  addZero(date.getHours());
  let minutes=addZero(date.getMinutes());
  let seconds=addZero(date.getSeconds());
  
  console.log(`${hours}:${minutes}:${seconds}`);
},1000)

