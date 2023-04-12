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
























