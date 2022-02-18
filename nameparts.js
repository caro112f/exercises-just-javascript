"use strict";
let fullName = "Caroline Holm Nielsen";
// let firstName;
// let middleName;
// let lastName;

function getNameParts(fullName) {
  const firstName = fullName.substring(
    fullName.indexOf(0),
    fullName.indexOf(" ")
  );
  const middleName = fullName.substring(
    fullName.indexOf(" "),
    fullName.lastIndexOf(" ")
  );
  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  return `Hello my first name is ${firstName}, my middle name is ${middleName} my last name is ${lastName}`;
}
console.log(getNameParts(fullName));
