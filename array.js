"use strict";

// const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(letters[4]);

// let newarr = letters;
// newarr[4] = "*";
// console.log(letters[4]);

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.push("Drago");
// // result = people.pop();
// result = people.push("Neville");
// result = people.push("Luna");
// // result = people.slice(0, 3);
// // result = people.splice(1, 0, "Cho");
// // people[1] = "Ginny";
// result = people.push("Fred", "George");
// // result = people.indexOf("Fred");
// // result = people.splice(result, 1);
// result = people.shift("Fred");
// console.log(result);
// console.log(people);

const str = "abcdefgh";
const arr1 = str.split();
console.log(str);
console.log(arr1);

const str2 = "abcdefgh";
const arr2 = Array.from(str);
console.log(str2);
console.log(arr2);
