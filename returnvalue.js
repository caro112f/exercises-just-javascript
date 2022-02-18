"use strict";
// const result = greeting("Caroline");

// function greeting(firstName) {
//   return `hello ${firstName}`;
// }
// NOTE returns hello + my name
// console.log(result);
//-----------------------------------
//NOTE you can change the string "Caroline" to any name, it doesnt matter
// NOTE you can console.log the name of the function instead of result and it will be the same
// NOTE doesnt work if you remove the parameter in the function name since the computer wont know what firstName in the return is
//-------------------------------------
// const result = greeting("any name");

// function greeting(firstName) {
//   return `hello ${firstName}`;
// }
// console.log(result);

//---------------------------------------

// const txt = `Greeting is ${greeting("a name")}`;

// function greeting(firstName) {
//   return `hello ${firstName}`;
// }
// console.log(txt);

//NOTE console shows "greeting is hello a name", it works

//---------------------------------

//NOTE return cannot be found, is only activated when you manually consoles the txt/the const

// const txt = `Greeting is ${greeting("a name")}`;

// window.addEventListener("DOMContentLoaded", greeting);

// function greeting(firstName) {
//   return `hello ${firstName}`;
// }
// console.log(txt);

//------------------------------------

// NOTE: The return statement ends function execution and specifies a value to be returned to the function caller.
//NOTE: the function caller is in this case the console.log(getRectArea(3, 4));
//NOTE: therefore you cannot get return manually in the inspector console without having called the function

// function getRectArea(width, height) {
//   if (width > 0 && height > 0) {
//     return width * height;
//   }
//   return 0;
// }

// console.log(getRectArea(3, 4));
// // expected output: 12

// console.log(getRectArea(-3, 4));
// // expected output: 0
