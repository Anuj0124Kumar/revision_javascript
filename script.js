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

// console.log(modefiedArr+" "+arr1);

// let againModified = arr2.map(item=> item*3)

// console.log(againModified+" "+arr2);

//FILTER
// let arr1= ["Anuj","Ravi","Rani","Sunder"];
// let arr2=[2,4,5,89,67,89];


// let newFilter = arr1.filter((item)=>{
//      return item === 'Sunder';
// })

// console.log(newFilter+" "+arr1);

// let againFilter = arr2.filter((item)=>{
//     return item%2 === 0;
// })

//console.log(againFilter);

//REDUCE

//  let arr1= ["Anuj","Ravi","Rani","Sunder"];
//  let arr2=[2,4,5,89,67,89];

// let ModifiedReduce = arr1.reduce((accu,curr)=>{
//       accu+=curr;
//       return accu;
// },"")

// console.log(ModifiedReduce+" "+arr1);


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

// document.getElementById('one').addEventListener('click',function(){
//     console.log("one");
// },false)
// document.getElementById('two').addEventListener('click',function(){
//     console.log("two");
// },false)
// document.getElementById('three').addEventListener('click',function(){
//     console.log("three");
// },false)
// document.getElementById('four').addEventListener('click',function(){
//     console.log("four");
// },false)

// //Capture Phase
// document.getElementById('one').addEventListener('click',function(){
//     console.log("one");
// },true)
// document.getElementById('two').addEventListener('click',function(){
//     console.log("two");
// },true)
// document.getElementById('three').addEventListener('click',function(){
//     console.log("three");
// },true)
// document.getElementById('four').addEventListener('click',function(){
//     console.log("four");
// },true)


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

//  function func2 () {
//    setTimeout(() => {//Call stack ----> WebApi------>Event Queue--------->Event loop------->Call stack
//     console.log("Function2");
//    }, 5000);
//  }

//  function func1 () {
//     console.log("Function1 Start");

//     func2();

//     console.log("Function1 end");
//  }

//  func1();

 // Currying Apply Bind  excutionContext this


   //simple currying


//   function sum (a) {
//     return function (b){
//         return function (c) {
//             return function (d) {
//                 return a+b+c+d;
//             }
//         }
//     }
//   }

//  console.log(sum(4)(3)(6)(7));

 // using fat arrow function

//   const sum = (a) => (b) => (c) => (d) => a+b+c+d;

//   console.log(sum(4)(3)(6)(7));



//Infinite curring 

// function add(a){
//     return function (b) {
//         if(b){
//            return add(a+b);
//         }
//         else{
//             return a;
//         }
//     }
// }

// console.log(add(24)(23)(56)(23)(12)(34)(100)(24)(23)(56)(23)(12)(34)(100)());




// CALL APPLY BIND

// let student ={
//     name:"anuj",
//     lastName:"Kumar",
//     getgamil:function(){
//           return `${this.name}.${this.lastName}@gmail.com`
//     }
// }

// let teacher = {
//     name:"Ashish",
//     lastName:"Kumar",
//     getgamil:function(){
//         return `${this.name}.${this.lastName}@gmail.com`
//   }
// }

// console.log(student.getgamil());
// console.log(teacher.getgamil());

// this keyword
// withOut arrow function
//  const newObj ={
//     name : "Rohit",
//     student: function(){
//         console.log(`my name is ${this.name}`);
//     }
//  }

//  //newObj.student();

//  let check = newObj.student;
//  window.name="Raja";

//  check();


 // now with arrow function
// window.name= "";
//  const newObj ={
//     name : "Rohit",
//     student: () =>{
//         console.log(`my name is ${this.name}`);
//     }
//  }
//  window.name="Raja";
//  newObj.student();

// //  let check = newObj.student;
// //  window.name="Raja";

// //  check();

// // function getgamil (name,lastName) {
// //       console.log(`${name}.${lastName}@gmail.com`);
// // }


// // let student ={
// //     name:"anuj",
// //     lastName:"Kumar",
// //     getgamil:getgamil(this.name,this.lastName)
// // }


// // let teacher = {
// //     name:"Ashish",
// //     lastName:"Kumar",
// //     getgamil:function(){
// //         getdetails(this)
// //   }
// // }

// // //console.log(student.getgamil());
// // console.log(teacher.getgamil());


// let x =10;


// var y = 25;// 

// function add () {
// let x = 20;
// var y = 30;

//     console.log(x+" "+y);
// }

// add();
// console.log(x+" "+y);



// function check (flag){
    
//     return new Promise((resolve,reject)=>{
//         if(flag%2==0){
//             resolve(flag);
//         }
//         else{
//             reject(0);
//         }
//     })
// }

// check(10).then((value)=>{
//     console.log(value);
//     return (value*30)
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


//slice and splice 

// let arr = ['Anuj','ravi','Rani'];



// let newArray = arr.slice(0,2);

// console.log(newArray);// ['Anuj','ravi'];

// let spliceArray = arr.splice(0,2);

// console.log(spliceArray);//['Anuj','ravi'];
// console.log(arr);//['Rani']



// let arr = [1,2,3,4,5,6];

// let PopItem = arr.pop();

// console.log(PopItem);//6
// console.log(arr);[1,2,3,4,5]

// let PushItem = arr.push(7);

// console.log(PushItem);//6th item
// console.log(arr);//[1,2,3,4,5,7]


// difference between === and ==

// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory



// const LamdaArrowFunction = (num=> num%2)


// console.log(LamdaArrowFunction(25));

//first order function which does not take any argument and also does not return any value

// let handel = () =>{
//     console.log("Pushpa jhukega nahi");
// }

// handel();


//Higher Order Function

// const secondFunction = () =>{
//     console.log("Higher Order function");
// }

// const firstFunction = (callFunction) =>{
//     callFunction();
// }
// firstFunction(secondFunction);

//currying

// function checkCurring(a){

//     return function (b){
//         return a*b;
//     }
// }

//   let pass = checkCurring(10);

//   console.log(pass);

//   console.log(pass(20));


//infinite curring

// function checkAgain(a){

//     return function (b){
//         if(b){
//             return checkAgain(a+b);
//         }
//         else{
//                return a;
//         }
//     }
// }

// console.log(checkAgain(10)(200)(234)(1115)());


//fat arrow function currying

// const checkAgain = (a)=>(b)=>(c)=> a+b+c;

// console.log(checkAgain(1)(2)(30));


//let var const

// let count = 30;
// var count1 = 30;

// if(count == 30){
//     let count = 31;
//     console.log(count);//it is inside block scope
//     count1 = 35;
// }

// console.log(count);
// console.log(count1);//global scope


// function add(pushpa){

//     if(pushpa){
//         let second = 10;
//         var check = 20;
//         console.log(check);
//         console.log(second);
//     }
//     //console.log(second);
//     console.log(check);
// }

// add(true);

// we can not declear let again but in case var we can do 

// let x = 10;

// let x = 20;// redeclearing giving error 

// var x =10;
// var x = 20;// it is not giving error

// const x =10;
//  x= 20;// we can't change the constant value

// console.log(x);

// let x =10;




//closure


// function check(){
//     let data =10;
//     return function(){
//         return  data;
//     }
// }

// let op = check();

// console.log(op());

//another Example

// function first(){
//    let x=10;
//     function second(){
//         y=30;
      
//         function third(){
//             z = 60;
//             console.log( x+y+z);
//         }
//        let z =50;
//        third();
//     }
//     let y=20;
//     second();
// }

// first();


// callback


// function Pushpa(name,callback){
//     setTimeout(() => {
//         callback (name);
//     }, 1000);
// }
// console.log("start");
//  Pushpa('srivalli',((nm)=>{console.log(nm)}));
// console.log("end");

//callback hell

// function PushpaRise(name,callback){

//     setTimeout(() => {
//         callback (name);
//     }, 1000);
// }

// function PushaThree(name,callback){
//     setTimeout(() => {
//         callback (["Raja","Sadi","Tadi"])
//     }, 2000);
// }

// console.log("start");

// PushpaRise("srivalli",((nm)=>{console.log(nm),PushaThree(nm,((hobbi)=>{console.log(hobbi)}))}))


//resolve  by Promise


//  function Pushpa(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(name);
//         }, 1000);
//     })
//  }

//  Pushpa("srivalli").then((value)=>{
//     console.log(value);
//  }).catch((error)=>{
//     console.log(error);
//  })


// function pushparise(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(name);
//         })
//     })
// }
// // then Promise chaining problem
// function pushpaTwo(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(['Kbaaddi','Cricket','ravan']);
//         }, 2000);
//     })
// }

// pushparise("srivalli").then((value)=>
//     pushpaTwo(value)
// ).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

//resolve async await


// function pushpaAgain(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve (name);
//         }, 1000);
//     })
// }

// function Hobbies(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve (['Kbaaddi','Cricket','ravan']);
//         }, 2000);
//     })
// }


// (async function test () {

//     let value = await pushpaAgain("srivalli");
//     let data = await Hobbies(value);

//     console.log(data);
// })();


// function PushpaAgain (data) {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(data);
//         }, 1000);
//     })
// }


// PushpaAgain(13).then((value)=>{
//     console.log(value);
//     return value*10;
// }).then((data)=>{
//     console.log(data);
//     return 25*data;
// }).then((val)=>{
//     console.log(val);
// }).catch((error)=>{
//     console.log(error);
// })


// let promise1 = Promise.resolve(3);
// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve (28);
//     }, 7000);
// })
// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve (25);
//     }, 5000);
// })

// Promise.all([promise1,promise3,promise2]).then((data)=>{
//     console.log(data);
// })


// Promise.race([promise1,promise3,promise2]).then((data)=>{
//     console.log(data);
// })


var msg;
// function greeting() {
//    alert('Good morning');
// }
// function start() {
//   msg =setTimeout(greeting, 3000);

// }

// function stop() {
//     clearTimeout(msg);
// }
// start();
// stop();


// function redirect() {
//     window.location.href = "index.html";
//   }

//Arguments


// function sum(){
//     let total =0;
//     for(let i=0; i<arguments.length; i++){
//        total+=arguments[i];
//     }
//     return total;
// }

// console.log(sum(1,2,3));

// make first letter uppercase

// function upperca(str){
     
//     return str.charAt(0).toUpperCase()+str.slice(1);
// }

// console.log(upperca("anuj"));


// var today = new Date();
// var dd = String(today.getDate()).padStart(2, "0");
// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + "/" + dd + "/" + yyyy;
// document.write(today);


// let str = "  Anuj you are great    "

// console.log(str);


// str = str.trim(str);

// console.log(str);


// let str = "Anuj you are best";

// let arr = str.split(" ");

// console.log(arr);


// const check = sum =>
//      sum/2;


// const add=num=> num/20;

// console.log(check(20));

// console.log(add(30));

// let arr = [12,3,4,5,6];

// let result = arr.reduce((curr,acc)=>{
//     return acc+=curr;
// })

// console.log(result);


// let userDetails = {
//     name:"Pushpa",
//     age:32,
//     work:"actor",
//     details:function(){
//         console.log(`${this.name} is working as ${this.work} and age is ${this.age}`);
//     }
// } 

// userDetails.details();

// let userdeatils2 ={
//     name:"srivalli",
//     age:26,
//     work:"actoress"
// }

// userDetails.details.call(userdeatils2);


// but i want to make my details function independent to other object

// let userDetails = {
//     name:"Pushpa",
//     age:32,
//     work:"actor",
// } 

// function details(){
//     console.log(`${this.name} is working as ${this.work} and age is ${this.age}`);
// }

// details.call(userDetails);

// let userdeatils2 ={
//     name:"srivalli",
//     age:26,
//     work:"actoress"
// }

// details.call(userdeatils2);


// apply 


// let userDetails = {
//     name:"Pushpa",
//     age:32,
//     work:"actor",
// } 

// function details(state,country){
//     console.log(`${this.name} is working as ${this.work} and age is ${this.age} from ${state} ${country}`);
// }

// details.call(userDetails);

// let userdeatils2 ={
//     name:"srivalli",
//     age:26,
//     work:"actoress"
// }

// details.call(userdeatils2,"Andhra pradesh","india");
// details.apply(userdeatils2,["Jharkhand","India"]);


// bind

// let userDetails = {
//     name:"Pushpa",
//     age:32,
//     work:"actor",
// } 

// function details(state,country){
//     console.log(`${this.name} is working as ${this.work} and age is ${this.age} from ${state} ${country}`);
// }

// details.call(userDetails);

// let userdeatils2 ={
//     name:"srivalli",
//     age:26,
//     work:"actoress"
// }

// details.call(userdeatils2,"Andhra pradesh","india");
// details.apply(userdeatils2,["Jharkhand","India"]);

// let print = details.bind(userDetails,"TamilNadu","India");

// console.log(print);

// print();


//this Keyword

// it is with simple function

// const Alluarjun={
//     name:"Pushpa",
//     age:32,
//     dialogue:"jhukega nahi",
//     next: function(){
//        return (`${this.name} ${this.name} raj ${this.dialogue}`);
//     }
// }

//  console.log(Alluarjun.next());//pushpa Pushpa raj jhukega nahi


// let check = Alluarjun.next;

// window.name="anuj"
// window.dialogue="jhukega nahi sala"

// console.log(check());//anuj anuj jhukega nahi sala

// with nested object

// const Alluarjun = {
//     name:"Pushpa",
//     age:45,
//     again:{
//        name:"ravi",
//         checkAgain : function(){
//            console.log(this.name);
//         }
//     }
// }


// Alluarjun.again.checkAgain();//ravi


// let check = Alluarjun.again.checkAgain;
// check();//anuj


//object function object


// const pushpa = {

//     name: "Srivalli",

//     getName(){
//         const name = "Pushpa Bhaau"
//         return this.name;
//     }

// }

// console.log(pushpa.getName());// Srivalli


//with fat arrow function


// const pushpa = {
//     name :"srivalli",
//    check : ()=>{
//       return (`${this.name}`);
//    }

//  }

//  console.log(pushpa.check());// window object


//  const PushpaRise = {
//     name : "Nayantara",
//     check :{
//         checkAgain:()=>{
//             return (`${this.name}`)
//         }
       
//     }
//  }

//  console.log(PushpaRise.check.checkAgain());// window object // Anuj


// const Pushpa = {
//     name:"Srivalli",
//     check(){
//        const nested = () =>
//            console.log(this.name);

//            nested();
       
//     },
// }

//Pushpa.check();

//Spread operator

// function add (x = 5,y=10,...args){
//     let total = x+y;
//     for(let i =0 ; i<args.length; i++){
//         total+=args[i];
//     }
//     return total;
// }

// console.log(add(1,2,3,5,6,7));


// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//   console.log(myUpdatedVehicle);

//Rest operator


// let arr = [1,2,3,4,5,6,7,9];


// let [one,two,...rest] = arr;


// console.log(rest);


// const arrayOne = ['a', 'b', 'c'];
// const arrayTwo = [1, 2, 3];
// const arraysCombined = [
// ...arrayOne,...arrayTwo
// ];

// console.log(arraysCombined);


//event Bubbling

document.getElementById('one').addEventListener('click',function (){
    console.log("one");
},false);
document.getElementById('two').addEventListener('click',function (){
    console.log("two");
},false);
document.getElementById('three').addEventListener('click',function (){
    console.log("three");
},false);
document.getElementById('four').addEventListener('click',function (){
    console.log("four");
},false);


// captureing

document.getElementById('one').addEventListener('click',function (){
    console.log("one");
},true);
document.getElementById('two').addEventListener('click',function (){
    console.log("two");
},true);
document.getElementById('three').addEventListener('click',function (){
    console.log("three");
},true);
document.getElementById('four').addEventListener('click',function (){
    console.log("four");
},true);








































































































