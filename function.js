//builtin function
//custom function

// console.log(addTwoNumber)

// //general function
// function addTwoNumber(a,b){//hoisting in func and var is possible:accessing variable before its declaration,declaration of variable shifted to top so it will not throw err but give undefined
//   // //function to variable
//   // const addTwoNumber=function(a,b){
//   let c=a+b
//   return c;
// }
// //console.log(addTwoNumber)
// let r=addTwoNumber(2,3)
// console.log(r)

// console.log(a)
// var a=20
//function jabhayepani declar gareko xa bhanea jabatani call garna payo
//server and file size is increased due to hoisting

// const addTwoNumber=(a,b)=>{
//   // const c=a+b
//   // return c

//   return a+b
// }

//arrow function ma small brack ma bhako is return statement
// const addTwoNumber=(a,b)=>(a+b)

// const r= addTwoNumber(10,10)
// console.log(r)

// const add=(a,b=0)=>{
//   return (a+b)
// }
// const result=add(10)//a=10,b=undefined
// console.log(result)//NaN

// const add=(a,b,c,d,e,f,g,h)=>{
//   return (a+b+c+d+e+f+..)
// }

// instead of this use arr or obj as argument

// let total=0
// let add=(arr)=>{
//   for(let i=0;i<arr.length;i++){
//      total+=arr[i]
// //   }
//   return total
// }

// let ad=add([a=10,b=20,c=30,d=40,e=50])
// console.log(ad)

// let total=0
// let add=(obj)=>{
//   return obj.a+obj.b+obj.c

// }

// let ad=add({a:1,b:2,c:3})
// console.log(ad)

// let obj={
//   name:"yamni",
// getName:function(){
//   console.log("the name is:"+ this.name)
// }

// getName(){
//   console.log("the name is:"+ this.name)
// },

//    getName:()=>{
//     this.name="uvi"//this ko scope arr function bitra matra hunxa
//     console.log("the name is:"+ this.name)//undefined
//     //obj ko arrow function bitra this ko scope hudaina
//   },
// };

// obj.getName()

//by using function print (1-10) without using loop
// tree data structure ma kam garnu paryo bhanea we use recursion

//  const print=(i=1)=>{
//    console.log(i)
//    i++
//    if(i<=10){
//      print(i)
//    }
//  }
// print()//recursive function : a function callling itself

// print Node. from 1-n using loop

// let printTillN=(num)=>{
//  for(let i=1;i<=num;i++){
//   console.log(i)
//  }
// }

// printTillN(5)

// print sum of all number in array

// let print1=(arr)=>{
//  let total=0;
//  for(let i=0;i<arr.length;i++){
//   total+=arr[i]
//  }
//  console.log(total)
// }
// print1([10,20,30,40,50])

//count the even number

// let countEven=(arr)=>{
//   let count=0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//       count++
//     }
//   }
//   console.log(count)
// }

// countEven([10,20,60,22,77,90,11])

// let reverseNum=(num)=>{
//  let r,reversed=0;
//  while(num>0){
//   r=num%10
//   reversed=reversed*10+r
//   num=Math.floor(num/10)

//  }
//  console.log(reversed)
// }
// reverseNum(9087)

// let remainder,reversed=0;
// let reverseNum=(num)=>{
//  while(num>0){
//   remainder=num%10;
//   reversed=reversed*10+remainder;
//   num=  Math.floor(num/10)
//  }
//  console.log(reversed)
// }
// reverseNum(123)

let menu = [
  {
    name: "clothing",
    subCat: [
      {
        name: "Gen's cloths ",
        subCat: [
          { name: "pants", subCat: null },
          { name: "T-shirts", subCat: null },
        ],
      },

      {
        name: "ladie's cloths",
        subCat: [
          {
            name: "kurti",
            subCat: [
              { name: "banarasi", subCat: null },
              { name: "net", subCat: null },
            ],
          },
          { name: "sari", subCat: null },
        ],
      },

      { name: "kid's cloths", subCat: null },
    ],
  },

  {
    name: "Smart Phones",
    subCat: [
      { name: "Iphone", subCat: null },
      { name: "samsung", subCat: null },
    ],
  },

  {
    name: "electronics",
    subCat: [
      { name: "Gaming pc", subCat: [{ name: "apple", subCat: null }] },
      { name: "oven", subCat: null },
    ],
  },
];

// for(let menu1 of menu){
//   console.log(menu1.name)

//   if(menu1.subCat){
//     for(let menu2 of menu1.subCat){
//       console.log("\t"+ menu2.name)
//       if( menu2.subCat){
//         for( let menu3 of menu2.subCat){
//           console.log("\t\t" +menu3.name)
//           if(menu3.subCat){
//             for (let menu4 of menu3.subCat){
//               console.log("\t\t\t"+menu4.name)
//             }
//           }
//         }
//       }
//     }
//   }
// }

//using the recursion

// let printMenu=(subCat,space=0)=>{
//   if(subCat){
//     space+=1
//     for(let subCat2 of subCat){
//       console.log("\t".repeat(space)+subCat2.name)
//       printMenu(subCat2.subCat,space)
//     }
//   }

// }
// for (let menu1 of menu){
//   console.log(menu1.name)
//   printMenu(menu1.subCat)
// }

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i].name)

//   if (  menu[i].subCat && menu[i].subCat.length > 0) {
//     for (let j = 0; j < menu[i].subCat.length; j++) {
//        console.log(menu[i].subCat[j].name)

//       if (menu[i].subCat[j].subCat && menu[i].subCat[j].subCat.length > 0) {

//         for (let k = 0; k < menu[i].subCat[j].subCat.length; k++) {
//           console.log(menu[i].subCat[j].subCat[k]);
//         }
//       }
//     }
//   }
// }

/**
 * clothing
 *    Gen's cloths
 *       pants
 *       T-shirt
 *    Ladie's cloths
 *       kurti
 *       sari
 *    Kid's cloths
 *
 * Electronics
 *    Gaming pc
 *       apple
 *    Oven
 * Smart  Phone
 *    Iphone
 *    Samsung
 *
 */

//using recursion

// printObj = (subDiv, space = 0) => {
//   if (subDiv) {
//     space += 1;
//     for (let obj2 of subDiv) {
//       console.log("\t".repeat(space) + obj2.name);
//       printObj(obj2.subDiv, space);
//     }
//   }
// };

// for (let obj1 of obj) {
//   console.log(obj1.name);
//   printObj(obj1.subDiv);
// }

// for (let i=0;i<obj.length;i++){
//   console.log(obj[i].name);

//   if(obj[i].subDiv && obj[i].subDiv.length){
//     for (let j=0;j<obj[i].subDiv.length;j++){
//       console.log("\t"+obj[i].subDiv[j].name)

//       if(obj[i].subDiv[j].subDiv && obj[i].subDiv[j].subDiv.length ){

//         for(let k=0;k<obj[i].subDiv[j].subDiv.length;k++){
//           console.log("\t\t"+obj[i].subDiv[j].subDiv[k].name)

//           if(obj[i].subDiv[j].subDiv[k].subDiv && obj[i].subDiv[j].subDiv[k].subDiv.length){
//             for(let l=0;l<obj[i].subDiv[j].subDiv[k].subDiv.length;l++){
//               console.log("\t\t\t"+obj[i].subDiv[j].subDiv[k].subDiv[l].name)
//             }
//           }

//         }
//       }
//     }
//   }
// }

// for (let obj1 of obj) {
//   console.log(obj1.name);
//   if (obj1.subDiv) {
//     for (let obj2 of obj1.subDiv) {
//       console.log("\t" + obj2.name);
//       if (obj2.subDiv) {
//         for (let obj3 of obj2.subDiv) {
//           console.log("\t\t" + obj3.name);
//           if (obj3.subDiv) {
//             for (let obj4 of obj3.subDiv) {
//               console.log("\t\t\t" + obj4.name);
//             }
//           }
//         }
//       }
//     }
//   }
// }

//using the recursion

let menus = [
  {
    name: "electronics",
    subCat: [
      {
        name: "Gaming pc",
        subCat: [
          {
            name: "apple",
            subCat: [
              { name: "v1", subCat: null },
              { name: "v2", subCat: null },
            ],
          },
        ],
      },
    ],
  },
];

// printMenus = (subCat, space = 0) => {
//   if (subCat) {
//     space += 1;
//     for (let subcat2 of subCat) {
//       console.log("\t".repeat(space) + subcat2.name);
//       printMenus(subcat2.subCat, space);
//     }
//   }
// };

// printMenus(menus, -1);

// Documents
//   College
//   Projects
//     Website
//     Portfolio
// Pictures
//   Vacation
//   Family

let folder = [
  {
    name: "Document",
    subDir: [
      { name: "college", subDir: null },
      {
        name: "Projects",
        subDir: [
          { name: "website", subDir: null },
          { name: "Portfolio", subDir: null },
        ],
      },
    ],
  },
  {
    name: "Pictures",
    subDir: [
      { name: "Vacation", subDir: null },
      { name: "Family", subDir: null },
    ],
  },
];


// printFolder=(subDir,space=0)=>{
//   if(subDir){
//     space+=1
//     for(let subDir2 of subDir){
//       console.log("\t".repeat(space)+subDir2.name)
//       printFolder(subDir2.subDir,space)
//     }
//   }

// }

// for(let folder1 of folder){
//   console.log(folder1.name)
//   printFolder(folder1.subDir)
// }

// // printFolder(folder,-1)

// Ruchi: This post is great!
//   Anu: Yes, totally agree!
//     Kriti: Same here!
// Sita: Nice explanation!

let comment=[
  {
    user:"Ruchi",
    text:"This post is great",
    replies:[
      {user:"Anu",
        text:"Yes, it is !!",
        replies:[
          {user:"kriti",
            text:"same here",
            replies:null
          },
        ],
      },
    ],
  },
  {
    user:"Sita",
    text:"Nice to meet you!!",
    replies:null
  },
];


// Ruchi: This post is great!
//   Anu: Yes, totally agree!
//     Kriti: Same here!
// Sita: Nice explanation!


printC=(replyArr,space=0)=>{
  space+=1
  if(replyArr){
    for (let r1 of replyArr){
      console.log("\t".repeat(space)+r1.user+":"+r1.text)
      printC(r1.replies,space)
    }
  }

}

for (let c1 of comment){
  console.log(c1.user+":"+c1.text)
  printC(c1.replies)
}

