//es6
// import {getData} from "./es"//-->named export
// import userInfo from "./es"//-->default export

import userInfo,{getData} from "./es"
import http from "http"
import "./callback"

//es5 
//relative,absolute,package paths type
const importInfo=require("/volumes/Data/mern/js-basics/es")//-->absolute path

//relative path
const info= require("./es")//-->import gareko sabai dinxa
//yewtai dir("./")
//yekstep baira("../")
//dwestep baira("../../"),("../../../")and so on..

info.getData(new Date(),2)

//kei yewta matrai chayo re export gareko 
const{getData}=require("./es")
getData()


//node_modules/package hunxa

const http=require("http")

require("./callback")//code of callback file will run from line 1 to the end.


//note::::node is default set for es5
// for es6 our project has to be defined as modular js