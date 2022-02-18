"use strict";

// let lastName = "Nielsen";
// let firstName = "Caroline";
// let middleName = "Holm";

// function fullName(lastName, firstName, middleName) {
//   const fullName = firstName.concat(" ", middleName, " ", lastName);
//   console.log(`my full name is ${fullName}`);
// }
// fullName("Potter", "Harry", "James");

//------------------

// fullName("Potter", "Harry", "James");

// fullName("Potter", "Harry");

// fullName("Harry", "Potter");

// fullName("Potter", "Harry", "James", "Pottypotpot");

// function fullName(lastName, firstName, middleName) {
//   if (middleName) {
//     console.log(`${firstName} ${middleName} ${lastName}`);
//   } else {
//     console.log(`${firstName} ${lastName}`);
//   }
// }

//-----------------------------using RETURN instead ------------------

fullName("Potter", "Harry", "James");

fullName("Potter", "Harry");

fullName("Harry", "Potter");

fullName("Potter", "Harry", "James", "Pottypotpot");

function fullName(lastName, firstName, middleName) {
  //   const lastName = fullName.substring(
  //     fullName.indexOf(0),
  //     fullName.indexOf(" ")
  //   );
  //   const firstName = fullName.substring(
  //     fullName.indexOf(" "),
  //     fullName.lastIndexOf(" ")
  //   );
  //   const middleName = fullName.substring(fullName.lastIndexOf(" ") + 1);

  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
    // return firstName, middleName, lastName;
  } else {
    return `${firstName} ${lastName}`;
    // return firstName, lastName;
  }
}

// console.log(lastName, firstName, middleName);
console.log(fullName("Potter", "Harry", "James"));

console.log(fullName("Potter", "Harry"));

console.log(fullName("Harry", "Potter"));

console.log(fullName("Potter", "Harry", "James", "Pottypotpot"));
