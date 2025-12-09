//ECMA
 //1718 standarad using

 //es5
 //es6-->we have to say to project that we are using es 6

  //common-es5
  //module-es6(we need to tell compiler,we are using es6 standard/predefined)
//
  //package.json=>("tye":"module")//es6
//  - let,const
//  -template literal,nullish coleaching,destructure,spread and rest
//  for-of,for-in
//  arrow.fucntion variables,default params function,one linera
//  async-await
//  OOP class based
//  Import and export

///  SOLID principle


//named export--es6
export const getData=(date,time)=>{
  return new Date()
}

const userInfo={
  name:"",
  age:""
}


//es5
module.exports = {
  getData,
  userInfo,
  user:"abc"
}

//es6 
export default userInfo

//es6
//types
  //named export
  //default export
    