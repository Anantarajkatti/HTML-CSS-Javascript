// compiletime and runtime

// compile time (before execution)-----------------------------------------------------------------------
// 1) code is converted into tockens i.e key words ,variables this is called as parsing and tockenization
// 2) syntax check - produce syntax errors
// 3) Hoisting : moving declations at top (TDZ also works)
// 4) scope and memory allocation

// Run Time------------------------------------------------------------------------------------------
//code execution begins call stack, eventloop starts working
//memeory allocation to objects, functions will happen here
// errors like reference error, type error are thrown
//garbege collection removes unused memory
// variable assigned actual values here

//JS?-----------------------------------------------------------------------------------------------
//   js is itself  set of rules (ECMA scrpt specifications)
//   the JS engine implements  those rules in C++
// javascript is high level language and it is not precompiled, stand alone language like c++, java
// most  of its elements  and execution logics are writtenin c++ like engine(v-8) for performane, garbage collection and many

// Js code is converted to machine code during run time using JIT compilation

// How JS executes?--------------------------------------------------------------------------------
//   parsing -> JIT(turboFan) compilations -> call Stack -> memory heap -> evet loop & web API
//  code-AST(abstact syntax tree)- machine code - function execution by stack - store Array,objects....- handle async tasks

// like c++ , and java ... Js does not have compile time..... due to JIT, compilation  happens in runtime
// but contains "before  execution" and "after execution"
// before execution - parsing, and tockenization, AST , scoping, hoisting,bytecode generation and optimization,
// after execution -  call stack, garbage collection, asynchronous actions

// JS Behaviour---------------------------------------------------------------------------------------
// by default Js bahave "synchronously" (function calls, loops) because it is single threded - executing one line at time (line by line) and call stack
// but "asynchronous"(setTimeout, promise, async and await) functions make it to behave asynchronously  to reap advantages (JS efficient)

// // Javascript run time environment-----------------------------------------------------------------------
// RTE provides access to the library and objects that help the program to interact with world

// it consists of 4 major components
// 1) JS engine - which consist of heap , callstack , JIT compilations, garbage collection,
// 2) webAPI
// 3) call back queue
// 4) event loop

// JS -engine
//manages - convert to machine code, execution environment(callstack,heap), JIT compilations , memory management/ garbage collection
// enable JS to work across platform
//   browser :- v8, spidermonkey, javascrpt core
//   server(node JS)  :- v8 + extra api (file system)

// v8 engine consists of
// 1) ignition (interpreter) -- js -> Byte Code
// 2) TurboFan ( JIT compiler) -> optimizes frequently used code (ex- function declaration is interpreted at once when function called first time
//                                 for second time JIT has optimized it )

// heap : unstructured memory that is used for allocation of objects and varibles

// call stack - its a data structure that keeps track of where we are in program following LIFO
// each entry in stack is called "stack frame"

// hoisting : - is moving declartion at the top
// what it means is during the scan(memory allocation) of JS program a memory is allocated to variable declarations(space is allocated)
// and function(fully stored) declarations.
//variable var- initialized as "undefined"
// let and const are kept in TDZ so producing "reference error"
// hoisting happens in stack memory not in heap
// stack is to store variables, function calls
// heap is to store complex data structure  such as objects

// global varibles are moved to the bottom of the stack ,so they reside -- so called "global scope"
// varibles in function or a block is " stack frame" which is added and removed - " local scope"

// //var (Allows redeclaration & reinitialization)

// var x = 10;
// var x = 20; // ✅ Redeclaration allowed
// x = 30; // ✅ Reinitialization allowed
// console.log(x); // 30

// //inside a block
// var a = 10;
// if (true) {
//   var a = 20; // ✅ Redeclaration allowed, affects outer scope
//   console.log(a); // 20
// }
// console.log(a); // 20 (unexpected behavior)
// //Why? var does not have block scope; it affects the whole function or global scope.

// //let (No redeclaration, but allows reinitialization)
// let y = 10;
// // let y = 20; // ❌ Redeclaration NOT allowed (SyntaxError)
// y = 30; // ✅ Reinitialization allowed
// console.log(y); // 30

// //let inside block
// let b = 10;
// if (true) {
//   let b = 20; // ✅ No error, because it's a different block scope
//   console.log(b); // 20
// }
// console.log(b); // 10 (outer `b` is unchanged)

// //var after let
// let c = 10;
// // var c = 20; // ❌ SyntaxError: Identifier 'c' has already been declared
// console.log(c);

// ///Hoisting with var vs. let
// console.log(d); // undefined (hoisted, but not initialized)
// var d = 10;

// console.log(e); // ❌ ReferenceError: Cannot access 'e' before initialization
// let e = 20;
// // const (No redeclaration & no reinitialization)

// const z = 10;
// // const z = 20; // ❌ Redeclaration NOT allowed (SyntaxError)
// // z = 30;       // ❌ Reinitialization NOT allowed (TypeError)
// console.log(z); // 10

// Temporal dead zone
// A Temporal Dead Zone (TDZ) is a region in the code where variables and functions declared using let or const are not accessible.
//  when a varible is declared with "let" and "const" they are hoisted but not initialized. so they are in temporal dead zone.
//  so accessing before initiation throws refrence error
//  but when a variable is declared with "var" they are hoistred and initiated with "undefined"

// try and catch, finally
// they are codeblocks mainly used for Error handling . The series of statements/code block which has to be watched for errors/exceptions are kept in
// try block which executes first. if any error occurs error block executes. finally is a block which executes despite of what  result is

// try {
//   let variable = 12;
//   if (variable >= 15) throw { name: "error", message: "not in range" };
//   else console.log("error is not thrown");
// } catch (error) {
//   console.log(error.name);
// } finally {
//   console.log("try,catch is learnt");
// }


//Functions---------------------------------------------------------------------------------------------------------------------------------------
// reusable codeblocks that are written for specific purpose

function functionName(){ 
    console.log("function executed")    // declation
}

functionName()              // call


// //named function
// function greet() {}
// greet()

// //anonymous function -- cannot be hoisted function declaration
// const greet=function(){}
// greet()

// //arraow function---- concised syntax, doesn't have its own "this"(inherits from surrounding scope)

// const greet=(parameters)=>{}
// greet()

//immediately invoked function -- used to avoid polluting global scope
// (function(){
//     console.log("function executed")
// })()

//callback functions- used for async opearations
// functions passed as argument of another function
// function function1(callback){
//     callback()
// }
// function function2(){}

// function1(function2)

// higherOrder functions-funnctions
// function that takes functions as arguments or returns function
// //Ex:       function opearate(a,b,func){
//                 return func(a,b)
//                 }

//           function multiply(a,b){
//             return a*b
//           }

//           operate(2,3,multiply)

//constructor functions--- to create object
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const abhi = new Person("abhi", "27");

// rest parameter in function
// it specifirs all numerours parameters we give
//functioncall(p1,p2,p3,p4........)
//  function functionName(...args){
//     console.log(args)// is an Array
//  }





