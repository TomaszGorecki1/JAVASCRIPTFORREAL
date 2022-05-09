'use strict';
/*
function calcAge(brithYear) {
  const age = 2137 - brithYear;

  function printAge() {
    const output = `${fristName} You are ${age}, and you was born in ${brithYear}`;
    console.log(output);

    if (brithYear >= 2100 && brithYear <= 2137) {
      const str = `Oh, you are a man, ${fristName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const fristName = `Tomasz`;
calcAge(2120);



let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName, oldLastName);

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(`before marriage: `, jessica);
console.log(`After marrieage`, marriedJessica);


*/

const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;
console.log(`before marriage: `, jessica2);
console.log(`After marrieage`, jessicaCopy);

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);
console.log(`before marriage: `, jessica2);
console.log(`After marrieage`, jessicaCopy);
