// "use strict";
// let str = "cAroline";
// function capitalization(str) {
//   str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
//   console.log(`my name is ${str}`);
// }
// capitalization(str);

//----------------------------using RETURN instead---------------

"use strict";

let str = "cAroline";

function capitalization(str) {
  str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  return `my name is ${str}`;
}
console.log(capitalization("cAroline"));

// function capitalize(navn) {
//   navn = navn.charAt(0).toUpperCase() + navn.substring(1).toLowerCase();
// }

// const navn = "pETer";
// const cap = capitalize(navn);
// console.log(capitalize(navn));
