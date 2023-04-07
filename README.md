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
   
