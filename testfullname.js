const aName = "ALbus PerCIval wulfric BRIaN dumbLEdOre";
const nameParts = getNameParts(aName);

function capitalize(str) {
  let capitalizedStr =
    str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  return `${capitalizedStr}`;
}

function getNameParts(inputName) {
  const firstName = capitalize(
    inputName.substring(inputName.indexOf(0), inputName.indexOf(" "))
  );
  const middleName = capitalize(
    inputName.substring(inputName.indexOf(" ") + 1, inputName.lastIndexOf(" "))
  );
  const lastName = capitalize(
    inputName.substring(inputName.lastIndexOf(" ") + 1)
  );
  //console.log({ firstName, middleName, lastName });
  return fullName(lastName, firstName, middleName);
}

function fullName(lastName, firstName, middleName) {
  let theFullName;
  firstName = capitalize(firstName);
  middleName = capitalize(middleName);
  lastName = capitalize(lastName);
  if (middleName) {
    theFullName = `${firstName} ${middleName} ${lastName}`;
  } else {
    theFullName = `${firstName} ${lastName}`;
  }
  return theFullName;
}

console.log(nameParts);

const theFullName = { firstName, middleName, lastName };

return theFullName;

// const aName = "ALbus PerCIval wulfric BRIaN dumbLEdOre";
// const nameParts = getNameParts(aName);

// function capitalize(str) {
//   let capitalizedStr =
//     str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
//   return `${capitalizedStr}`;
// }

// function getNameParts(inputName) {
//   const firstName = capitalize(
//     inputName.substring(inputName.indexOf(0), inputName.indexOf(" "))
//   );
//   const middleName = capitalizationMiddleName(
//     inputName.substring(inputName.indexOf(" ") + 1, inputName.lastIndexOf(" "))
//   );
//   const lastName = capitalize(
//     inputName.substring(inputName.lastIndexOf(" ") + 1)
//   );
//   //console.log({ firstName, middleName, lastName });
//   return { lastName, firstName, middleName };
// }

// function capitalizationMiddleName(middleName) {
//   let middleNameArr = middleName.split("");
//   middleNameArr.forEach((elm, index, arr) => {
//     if (elm === " ") {
//       arr[index + 1] =
//         arr[index + 1].toUpperCase() +
//         arr[index + 1].substring(1).toLowerCase();
//     }
//   });
//   let result = middleNameArr.join("");
//   return result;
// }

// console.log(nameParts);
