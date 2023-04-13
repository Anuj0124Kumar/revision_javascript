# revision_javascript

//global scope and block scope;

//let and const have Block Scope while Var have global scope
var a= 5;

let  b= 10;


function check (){
    let  b= 30;
    a=20;
    console.log("Block Part "+ b);
}
check();
console.log(b);
console.log(a);


// for IN and OF loop

define :

const person = {fname:"John", lname:"Doe", age:25};


The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]


for(let x in person){
     console.log(x);// 0,1,2,3,4
 }

 for(let x of person){
     console.log(x);//jhon doe 25
 }
   
// Bind

let person = {

naam: "Rajnikant",

printName: function () {

console.log("Mr. " + this.naam);

}

}

let human = {

naam: "Raj",

}

// class based cmponent

class KFC{

    orderChicken(mNo){
    
    let blinkit = new Blinkit();
    
    blinkit.deliver(mNo,"🍗");
    
    }
    
    }
    
    class Blinkit{
    
    deliver(mNo,parcel){
    
    setTimeout(()=>{
    
    mNo( "🤓" + parcel + "🤓");
    
    },5000);
    
    }
    
    }
    
    
    
    
  
    class KFC {
    
    orderChicken(mobileNumber) {
    
    let blinkIt = new Blinkit();
    
    blinkIt.deliver(mobileNumber, "🍗");
    
    }
    
    }
    
    class Blinkit {
    
    deliver(mobileNumber, parcel) {
    
    setTimeout(()=>{
    
    mobileNumber("😉" +parcel +"😉");
    
    }, 5000);
    
    }
    
    }
    
    let kfcPune = new KFC();
    
    let chicken;
    
    kfcPune.orderChicken(mobileNumber);
    
    function mobileNumber(parcel) {
    
    chicken = parcel;
    
    }

    /// second

    class KFC {

orderChicken() {

let blinkIt = new Blinkit();

return blinkIt.deliver("🍗");

}

}

class Blinkit {

deliver(parcel) {

const promise = new Promise((resolve, reject)=>{

setTimeout(()=>{

let n = Math.floor(Math.random()*100);

if(n>10)

resolve("😉" +parcel +"😉");

else

reject("Petrol Khatam");

}, 2000);

})

return promise;

}

}

let kfcPune = new KFC();

let chicken;

kfcPune.orderChicken()

.then(parcel=>{

chicken = parcel;

})



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

 LET VAR and CONST

var and let create variables that can be reassigned another value.
const creates "constant" variables that cannot be reassigned another value.
developers shouldn't use var anymore. They should use let or const instead.
if you're not going to change the value of a variable, it is good practice to use const.

KEYWORD	SCOPE	                    REDECLARATION & REASSIGNMENT	                      HOISTING
var	Global, Local	                yes & yes	                                           yes,with default value
let	Global, Local, Block	        no & yes	                                          yes, without default value
const	Global, Local, Block	    no & no                                        	      yes, without default value

var check = 35;
let x = 23;

{

    var check = 3438;//global scope
    let x = 56;//Block scope
    console.log(x);
}

  console.log(check);
  console.log(x);

  Async And Await

// await and Async Note:= await can only use with async;
// (async function(){
//     await Promise.resolve(console.log('Hello await')); // SyntaxError: await is only valid in async function
// })()

const check = async() => {
    let res = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    let data = res.json();

    console.log(data);
}

check();


-->What are global variables
Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable

msg = "Hello"; // var is missing, it becomes global variable


-->What are the problems with global variables
The problem with global variables is the conflict of variable names of local and global scope. It is also difficult to debug and test the code that relies on global variables.

-->What is NaN property
The NaN property is a global property that represents "Not-a-Number" value. i.e, It indicates that a value is not a legal number. It is very rare to use NaN in a program but it can be used as return value for few cases

Math.sqrt(-1);
parseInt("Hello");

-->The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.

isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(100); // true

-->What is an event flow
Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object. There are two ways of event flow

Top to Bottom(Event Capturing)
Bottom to Top (Event Bubbling)
⬆ Back to Top

-->What is event bubbling
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

⬆ Back to Top

-->What is event capturing
Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.

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


//How do you submit a form using JavaScript
//You can submit a form using document.forms[0].submit(). All the form input's information is submitted using onsubmit event handler

// function submit() {
//   document.forms[0].submit();
// }


-->How do you find operating system details
The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property,

console.log(navigator.platform);



-->How do you find operating system details
The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property,

console.log(navigator.platform);

-->What is the difference between native, host and user objects
Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec. Host objects are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects. User objects are objects defined in the javascript code. For example, User objects created for profile information.

⬆ Back to Top

-->What are the tools or techniques used for debugging JavaScript code
You can use below tools or techniques for debugging javascript

    Chrome Devtools
    debugger statement
    Good old console.log statement

-->What are the pros and cons of promises over callbacks
        Below are the list of pros and cons of promises over callbacks,

        Pros:

        It avoids callback hell which is unreadable
        Easy to write sequential asynchronous code with .then()
        Easy to write parallel asynchronous code with Promise.all()
        Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)
        Cons:

        It makes little complex code
        You need to load a polyfill if ES6 is not supported

-->What is the difference between an attribute and a property?

        Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

        <input type="text" value="Name:">
        You can retrieve the attribute value as below,

        const input = document.querySelector("input");
        console.log(input.getAttribute("value")); // Good morning
        console.log(input.value); // Good morning
        And after you change the value of the text field to "Good evening", it becomes like

        console.log(input.getAttribute("value")); // Good evening
        console.log(input.value); // Good evening


-->What is the purpose of void 0 ?

        Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an <a> element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression. For example, the below link notify the message without reloading the page

        <a href="JavaScript:void(0);" onclick="alert('Well done!')">
        Click Me!
        </a>

        OR

        <a href="www.google.Googlecom">Google</a><br>
        <a href="#">no Redirect to other page just move top of the page</a><br>
        <a href="JavaScript:void(0)">no Redirect to other page just stuck on same position</a>

-->Is JavaScript a compiled or interpreted language?

        JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

-->Is JavaScript a case-sensitive language?

    Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

-->Is there any relation between Java and JavaScript ?

        No, they are entirely two different programming languages and have nothing to do with each other. But both of them are Object Oriented Programming languages and like many other languages, they follow similar syntax for basic features(if, else, for, switch, break, continue etc).

-->




