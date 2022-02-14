"use strict";
const navn = "Albus Percival Wulfric Brian Dumbledore";
const length = navn.length;
const letterIndex = navn[2];

// const text = `${navn} + ${length}`;
// const text = `${letterIndex}`;
// const text = `${letterIndex}`;

// console.log(text);

const str1 = "  there is   space here \n ";
const str2 = str1.trim();

console.log(str1);
console.log(str2);

const albus = navn.substring(0, 5);
console.log(albus);
const dumbledore = navn.substring(29);
console.log(dumbledore);
const wulfricSpace = navn.substring(14, 23);
console.log(wulfricSpace);
