// var a=[1,2,4];
// if(11<12){

// }
// else if(12>22){

// };
// to print bar bar
// for(var i=0; i<11; i++ ){
//     console.log(i);
// }


// while loop
// a = 12;

 
// while(a<12){
//     a++;
// }


//functions
// function a( ){
//     console.log("hello world");
// }
  

//arrays
// ab = [1,2,3,4];

//push pop shift and unshift
// var a = [1,2,3,4,5,6,7,8];
// a.splice(3,2);



//object detail of one individual is called objects 
//var a = {}; blank object

// var c = {
// age: 24,
// name: "ali",
// subject: "science",
// color: "blue",
// son: 3,
// };
// //method: jisme property ki vlue function ho usy methd kehty hain
// c.age = "23";


//practice if else

// var a = window.prompt("input first number" );
// var b = window.prompt("input 2nd number" );


// if(a>b){
//  console.log(a)
// }
// else{
// console.log(b)
// };


//loops

// for(var i = 99; i>50; i ){
//    console.log(i)
// }


//if else practice
// var a = window.prompt("enter first number")
// var b = window.prompt("enter first number")
// var c = window.prompt("enter first number")

// if(a>b && a>c ){
//     console.log("greater is " + a)
// }
// else if(b>a && b>c){
//     console.log("greater is " + b)
// }
// else{
//     console.log("greater is " + c)
// };


// for loop practice
// for(var i=40; i<=50; i++){
//     console.log("ali")
// }

//while loop practice
// var a = 1;

// while(a<22){
//   var r = a++;
//   console.log(r);

// }


// function practice

// function add(a,b){
//   var C =  a + b;
//   console.log(C);
// }

// add(12,13);



// copy refernce value of array
// var a = [1,2,3,4,5];
// var b = [...a];
// b.pop();



//copy value of object
// var a = {
// name: "ali",
// class: "8th",
// age: "32 years",

// };
// var copya = {...a};


// for each function
// var a = [1,23,3,4,5,6,7,8,6,5,4];

// a.forEach(function(val){
// console.log(val + 2)
// });



//for in loop

// var obj = {
// name: "ali",
// age: "32 years",
// class: "7th",
// };

// for (var key in obj) {
//     console.log( key, ":" , obj[key])
// }



//call back funs

// setTimeout(function(){
// console.log("code chlao 2 sec bd")
// }, 2000);



// first class function

// function abcd(a){
// a();
// }

// abcd(function(){console.log("hey")});




// delete a prop in object

// var a = {
//     name : "ali",
//     class: "8th",
//     subject: "maths"
// };

// delete a.name;


//Advanced JAvascript

//1- higher funcs
 // aesa function jo apny parameter mn ak ur func ly higher order function hota ha .ya return b function kry
 //for example:
//   function abcd(val){

//  }
// abcd(function(){})


//2- constructor funcs
//aise funs jis me ap "this" k istemaal krty ho ur call krty wqt "new" keywoed use krty ho.
//aesy function jb apko dheer sary elements same properties k bnany hon constructor funcs use krty ho
//for example

// function batbanao(color){
// this.height = 4,
// this.length  = 8,
// this. color = color,
// this.shape = "rectangle"


// }

// var bat1 = new batbanao("green");
// var bat2 = new batbanao();



// 3- first class funcs:

// aesy funcs jo normal values y parameters ki trha treat k sken 
// for example:
// function abcd(){

// }

// abcd(function(){})


//4- new keyword
 //blank object bn jata ha jisme sari properties aajati hain constructr func ki


 //5- iife
 //immediately invoked func expression
 //func ko foran chalane ki kala, jisme ap koi b variable private kr skty o

//  var ans = (function (){
//  var privateval = 12;

//  return {
//     getter: function(){
//         console.log(privateval);
//     },
//     setter: function(val){
//         privateval = val;

//     },

//  }


//  })()

//6- prototype:
//many built in methods and properties given by JS theat we can use when we create object is called protype.

// 7- prototypal inheritance:
//inherits properties from parents using via prototype is known as prototypal inheritance
//for example:

// var human = {
//     canFly:false,
//     canWalk: true,
//     canPlay:true,
// };

// var student = {
//     name: "ali",
//     age:23,
//     sonOf:"qazi shahid hameed"

// }

// student.__proto__  = human;

// 8- this, call, apply bind:

//-> koi b cheez brackets mn {} na ho to global scope hoti ha
//-> jb b function object k andr aajye ussy method kehty hain
//-> this ki value global mn window hoti ha
//->this ki value function mn window hoti ha.
//-> this ki value method mn parent object hoti ha
//-> this ki value eventlistner mn us sy pehla likha gya lafz hoti h.
// -> agr this ki value kch ur ha ur hum chahty k koi ur ho tou call apply bind use krty hain.
// -> apply mn attributes ki value hum array m dete hain baqi same ha.
//-> bind m function foran nai chlta usko variable mn save kr ky chlana prta ha.

//apply example:
//  function abcd(val, val1, val2){
//     console.log(this,val, val1,val2);
//  }

// var obj = {age:24};
// abcd.apply(obj,[1,2,3])

//bind example

// function abcd(){
//     console.log(this);
//  }

// var obj = {age:24};
// var bindedfunc = abcd.bind(obj);
// bindedfunc();

// 9- pure funcs:
//-> always return same output for same input.
//-> doesnot change the value of global variable.





