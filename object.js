const person1 = {
  firstNane: "Peter",
  age: 29,
  student: false,
};
// console.log(person1.lastName);
// person1.lastName = "Lind";

// console.log(person1.lastName);
// console.log(person1);
const person2 = person1;
person2.firstNane = "other Peter";
console.log(person1.firstNane);
