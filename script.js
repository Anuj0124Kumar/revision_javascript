//global scope and block scope;

//let and const have Block Scope while Var have global scope
// var a= 5;

// let  b= 10;


// function check (){
//     let  b= 30;
//     a=20;
//     console.log("Block Part "+ b);
// }
// check();
// console.log(b);
// console.log(a);




// For IN and OF loop;

// let arr = [24,27,67,4,5];

// for(let x in arr){
//     console.log(x);
// }

// for(let x of arr){
//     console.log(x);
// }


// class based component

// class KFC{

//     orderChicken(mNo){
    
//     let blinkit = new Blinkit();
    
//     blinkit.deliver(mNo,"🍗");
    
//     }
    
//     }
    
//     class Blinkit{
    
//     deliver(mNo,parcel){
    
//     setTimeout(()=>{
    
//     mNo( "🤓" + parcel + "🤓");
    
//     },5000);
    
//     }
    
//     }
    
    
    
    
  
//     class KFC {
    
//     orderChicken(mobileNumber) {
    
//     let blinkIt = new Blinkit();
    
//     blinkIt.deliver(mobileNumber, "🍗");
    
//     }
    
//     }
    
//     class Blinkit {
    
//     deliver(mobileNumber, parcel) {
    
//     setTimeout(()=>{
    
//     mobileNumber("😉" +parcel +"😉");
    
//     }, 5000);
    
//     }
    
//     }
    
//     let kfcPune = new KFC();
    
//     let chicken;
    
//     kfcPune.orderChicken(mobileNumber);
    
//     function mobileNumber(parcel) {
    
//     chicken = parcel;
    
//     }


// MAP 
  
// map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array.
// Example
// let arr1= ["Anuj","Ravi","Rani","Sunder"];
// let arr2=[2,4,5,89,67,89];



// let modefiedArr = arr1.map(item=> item);

// console.log(modefiedArr);

// let againModified = arr2.map(item=> item*3)

// console.log(againModified);

//FILTER
// let arr1= ["Anuj","Ravi","Rani","Sunder"];
// let arr2=[2,4,5,89,67,89];


// let newFilter = arr1.filter((item)=>{
//      return item === 'Sunder';
// })

// console.log(newFilter);

// let againFilter = arr2.filter((item)=>{
//     return item%2 === 0;
// })

// console.log(againFilter);

//REDUCE

// let arr1= ["Anuj","Ravi","Rani","Sunder"];
// let arr2=[2,4,5,89,67,89];

// let ModifiedReduce = arr1.reduce((accu,curr)=>{
//       accu+=curr;
//       return accu;
// },"")

// console.log(ModifiedReduce);


// let againFilter = arr2.reduce((accu,curr)=>{
//       accu+=curr;
//       return accu;
// },1)

// console.log(againFilter);


//LOCAL STORAGE && SESSION STORAGE

//define:-The localStorage object allows you to save key/value pairs in the browser.

//set, get item and remove and clear item from local storage

// localStorage.setItem("name","Anuj");

// let data = localStorage.getItem("name");

// console.log(data);

//  localStorage.removeItem("name");
//  localStorage.clear();


// Session storage

// sessionStorage.setItem("lastname", "Smith");
// sessionStorage.getItem("lastname");
// sessionStorage.removeItem("lastname");
// sessionStorage.clear();

//SORTING WITH INTEGER
//   let arr = [4,2,1,45,36,7,8];
   
//   arr.sort();
//console.log(arr);

//  arr.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1;
//     return 0;
//  })
//  console.log(arr);

// arr.sort((a,b)=>a-b);
// console.log(arr);

// arr.sort((a,b)=>b-a);

// console.log(arr);

//SORTING WITH STRING

//  let arr2 = ["Hello","Anuj","Ram","Suraj"];

// // arr2.sort((a,b)=>a-b);
// // console.log(arr2);


//  arr2.sort((a,b)=>a.localeCompare(b));
//  console.log(arr2);


// arr2.sort((a,b)=>b.localeCompare(a));
// console.log(arr2);

// Deep copy and shallow  copy

// PROBLEM with object but this problem can,t  not seen in simple variable;

// let obj = {
//     name:"Anuj"
// }

// let user = obj;

// user.name = 'Raaz';// prob is that it chaneing the value if obj since it is copying the referance/memoryLocation of obj;

// console.log(obj);
// console.log(user);

//In case of simple variable


//let x ='shyam';

// let y = x;// it is copying only value not memory Location

// y= "rahul";

// console.log(x);
// console.log(y);


//SOLUTION 

// first Method --- shallow copy it is applicable for simple or one object;
// let obj = {
//     name : "Anuj"
// }

// let user = Object.assign({},obj);

// user.name ="Raaz";


// console.log(obj);
// console.log(user);


//Second method  --- shallow copy it is applicable for simple or one object;

// let obj = {
//     name : "Anuj"
// }

// let user = {...obj}

// user.name ="Raaz";

// console.log(obj);

// console.log(user);


// Deep copy for nested object

// let obj = {
//     name:"Anuj",
//     address:{
//         city:"nawadih",
//         dist:"Koderma"
//     }
// }

// let user = JSON.parse(JSON.stringify(obj));

// user.address.city= "Mashnodih";

// console.log(obj);
// console.log(user);

// for function and date problem
// let obj ={
//     name:'Anuj',
//     address:{
//         city:"bhelwatand",
//         dist:"Koderma"
//     },
//     check:function(){
//        return 'all data back'
//     }
// }


// //let user = JSON.parse(JSON.stringify(obj));// it will not copy function

// // to copy the function 
// let user = _.cloneDeep(obj);

// console.log(obj);

// console.log(user);// here function is not present


//iifE

// (function(){
//     var a=b=3;//  describe b=3;// global scope
//    // var a = 3;// block scope
// })()

// console.log((typeof (a)));//Und
// console.log((typeof (b)));//number

// VAR LET and Const

// var check = 35;
// let x = 23;

// {

//     var check = 3438;//global scope
//     let x = 56;//Block scope
//     console.log(x);
// }

//   console.log(check);
//   console.log(x);

// await and Async Note:= await can only use with async;
// (async function(){
//     await Promise.resolve(console.log('Hello await')); // SyntaxError: await is only valid in async function
// })()

// const check = async() => {
//     let res = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
//     let data = res.json();

//     console.log(data);
// }

// check();

//console.log(isFinite(4.5));

// Bubbling phase

document.getElementById('one').addEventListener('click',function(){
    console.log("one");
},false)
document.getElementById('two').addEventListener('click',function(){
    console.log("two");
},false)
document.getElementById('three').addEventListener('click',function(){
    console.log("three");
},false)
document.getElementById('four').addEventListener('click',function(){
    console.log("four");
},false)

//Capture Phase
document.getElementById('one').addEventListener('click',function(){
    console.log("one");
},true)
document.getElementById('two').addEventListener('click',function(){
    console.log("two");
},true)
document.getElementById('three').addEventListener('click',function(){
    console.log("three");
},true)
document.getElementById('four').addEventListener('click',function(){
    console.log("four");
},true)


// How do you submit a form using JavaScript
// You can submit a form using document.forms[0].submit(). All the form input's information is submitted using onsubmit event handler

// function submit() {
//   document.forms[0].submit();
// }

//console.log(navigator.platform);


//CLOSURE

// let a=10;

// function test (){
//     let data = 10;
//     console.log(a);
// }
// console.log(data);//data will be not here since data will only present in their lexical scope
//  output like data is note define 
// this problem resolve by closure


// function check () {
//     let data = 10;
//     return function innerfunc(){
//         return data*data;
//     }
// }

// //console.log(check()());
// //OR
// let inner = check();
// console.log(inner());//inner function able to remember the value data so now we can access lexical scope data;


 //Multiple closure

// function check1 () {
//     let x=10;
//     return function check2() {
//         x=20;
//         return function check3() {
//             x=30;
//             return x*x;
//         }
        
        
//      }
   
 
// }

// console.log(check1()()());

// function check1 () {
//     let x=10;
//     const check2 = function () {
//        const check3 = function () {
//           return x*x;
//        }
//        x=65;
//        return check3;
//     }
//      x=29;
//      return check2;
// }

// console.log(check1()()());


// to realise the memory using closure

// function check1 () {
//     let a = 10;
//     return function check2 () {
//         a++;
//         return a;
//     }
// }

// let last = check1();
// console.log(last());
// console.log(last());
// console.log(last());
// console.log(last());


// CallBack function


// let students = [
//     {name:"Anuj",class:"seven"},
//     {name:"rahul",class:"six"},
// ]

// const StudentsEnrollment = (newStudent,CallBack) =>{
//     setTimeout(() => {
//         students.push(newStudent);
//         CallBack();
//     }, 3000);
// }

// const StudentenrollList = () =>{
//     setTimeout(() => {
//         let str = "";
//         students.forEach((item)=>{
//             str+=`<li>${item.name } class:- ${item.class}</li>`
//         })

//         document.getElementById('students').innerHTML=str;
//     }, 1000);
// }

// let newStudent = {name:"Arav",class:"one"};

// StudentsEnrollment(newStudent,StudentenrollList);


// program to display time every 5 seconds

// setInterval
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // return the time
//     let time = dateTime.toLocaleTimeString();

//     document.write(time);
    
// }

// let display = setInterval(showTime, 5000);





//problem in callback


// function check1 (name) {
//     setTimeout(() => {
//         console.log("inside first check1");
//        return name;
//     }, 1000);
//  }
//  console.log("start");
//  let nm = check1("Pushpa")
//  console.log(nm);//problem getting Undefine
//  console.log("End");

//Problem resolve using callback

//  function check2 (name,callback) {
//     setTimeout(() => {
//         console.log("inside first check1");
//         callback(name);
//     }, 1000);
//  }

// let nm = check2("Pushpa",((nm)=>console.log(nm)))//second argument is callback function



 // callBack hell problem in callback

//  function check3 (name,callback) {
//     setTimeout(() => {
//         console.log("inside check3");
//         callback(name)
//     }, 1000);
//  }
//  function check4(name,callback){
//     setTimeout(() => {
//         console.log("inside check 4");
//         callback(["cricket","Hockey","Football"])
//     }, 1000);
//  }

// let nm = check3("Srvalli",((nm)=>{console.log(nm);check4(nm,((hobby)=>{console.log(hobby);})) }));

// callback hell problem resolve by Promises

//Basic of Promise

// let promise = new Promise ((resolve,reject)=>{
//      let flag = 10;
//     if(flag%2 == 0){
//         resolve("Victory")
//     }
//     else{
//         reject("defeat")
//     }
// }).then(
//     (value)=>{console.log(value);},
//     //(error)=>{console.log(error);}
// ).catch((error)=>{
//     console.log(error);
// }).finally(()=>{console.log("complete");})


 
//Promise chaining

// let promise = new Promise ((resolve,reject)=>{
//     let flag = 10;
//    if(flag%2 == 0){
//        resolve(flag)
//    }
//    else{
//        reject("defeat")
//    }
// }).then((value)=>{
//     console.log(value);
//     return value+10;
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("completed");
// })


// call back resolve


// function getname (name) {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(name);
//         },2000)
//     })
// }

// function getHobbies (name) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(["Kabadi","KhoKho","Cricket"])
//         }, 4000);
//     })
// }

// getname("PushpaRise").then((nm)=>
//      getHobbies(nm)
// ).then((data)=>{
//     console.log(data);
// })


//Async Await

// function getname (name) {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(name);
//         },2000)
//     })
// }

// function getHobbies (name) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(["Kabadi","KhoKho","Cricket"])
//         }, 4000);
//     })
// }

// async function callFunc() {
//     try {

//         const nm = await getname("Pushpa2")
//         const hobby = await getHobbies(nm);

//         console.log(hobby);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// callFunc();


// event LooP

// webApi, AudioApi, ThirdPartyApi

//Call stack ----> WebApi------>Event Queue--------->Event loop------->Call stack

 function func2 () {
   setTimeout(() => {//Call stack ----> WebApi------>Event Queue--------->Event loop------->Call stack
    console.log("Function2");
   }, 5000);
 }

 function func1 () {
    console.log("Function1 Start");

    func2();

    console.log("Function1 end");
 }

 func1();

 // Currying Apply Bind  excutionContext this


































