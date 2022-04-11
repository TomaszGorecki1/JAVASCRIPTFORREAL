"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive lol`);

//const interface = `audio`; thank to use strict it is not possible to make mistake like this
//const private = 534;  thank to use strict it is not possible to make mistake like this



function logger() {
  console.log(`My name is Tomasz`);
}
//calling
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number(`23`);
console.log(num);



function describeCountry(country, population, captialCity) {
  let countryDescription = `${country} has ${population} milion people and its capital city is ${captialCity}`;
  return countryDescription;
}

const Poland = describeCountry(`Poland`, 38, `Warsaw`);
console.log(Poland);
const France = describeCountry(`France`, 2137, `Paris`);
console.log(France);
const Germany = describeCountry(`Germany`, 420, `Berlin`);
console.log(Germany);


//function declaration
function calcAge1(birthYear) {
  return 2137 - birthYear;
}

const age1 = calcAge1(2005);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
  return 2137 - birthYear;
};

const age2 = calcAge2(2005);

console.log(age1, age1);



function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% of the world`;
}
let China = percentageOfWorld1(1441);
console.log(China);
let Poland = percentageOfWorld1(38);
console.log(Poland);
let USA = percentageOfWorld1(338);
console.log(USA);

const percentageOfWorld2 = function (population) {
  return `${(population / 7900) * 100}% of the world`;
};

China = percentageOfWorld2(1441);
console.log(China);
Poland = percentageOfWorld2(38);
console.log(Poland);
USA = percentageOfWorld2(338);
console.log(USA);



// Arrow function
const calcAge3 = (birthYear) => 2137 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2137 - birthYear;
  const retirement = 65 - age;
  return `${retirement} years letf to retirement ${firstName}`;
};
console.log(yearsUntilRetirement(2005, `Tomasz`));
console.log(yearsUntilRetirement(1273, `Ewa Kowalczyk`));


function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% of the world`;
}
let China = percentageOfWorld1(1441);
console.log(China);
let Poland = percentageOfWorld1(38);
console.log(Poland);
let USA = percentageOfWorld1(338);
console.log(USA);

const percentageOfWorld3 = (population) =>
  `${(population / 7900) * 100} % of the world`;
China = percentageOfWorld3(1441);
console.log(China);
Poland = percentageOfWorld3(38);
console.log(Poland);
USA = percentageOfWorld3(338);
console.log(USA);



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% of the world`;
}

function describePopulation(country, population) {
  //const percentage = percentageOfWorld1(population);
  return `${country} has ${population} milion people, witch is ${percentageOfWorld1(
    population
  )}`;
}

console.log(describePopulation(`Poland`, 38));
console.log(describePopulation(`China`, 1441));
console.log(describePopulation(`USA`, 300));



const calcAge = function (birthYear) {
  return 2137 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${retirement} years letf to retirement ${firstName}`;
  } else {
    return `You are on retirement since ${retirement * -1} years now`;
  }
};

console.log(yearsUntilRetirement(2005, `Tomasz`));
console.log(yearsUntilRetirement(2120, `CyberTomasz`));



function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function checkWinner(Avgdolphins, Avgkoalas) {
  Avgdolphins = calcAverage(20, 23, 71);
  Avgkoalas = calcAverage(65, 54, 27);
  if (Avgdolphins >= 2 * Avgkoalas) {
    if (Avgdolphins > Avgkoalas) {
      console.log(`Dolphins win ${Avgdolphins} vs ${Avgkoalas}`);
      const koalaWon = false;
      // return koalaWon;
    } else {
      console.log(`Koalas win ${Avgkoalas} vs ${Avgdolphins}`);
      const koalaWon = true;
      // return koalaWon;
    }
  } else if (Avgkoalas >= 2 * Avgdolphins) {
    if (Avgdolphins > Avgkoalas) {
      console.log(`Dolphins win ${Avgdolphins} vs ${Avgkoalas}`);
      const koalaWon = false;
      // return koalaWon;
    } else {
      console.log(`Koalas win ${Avgkoalas} vs ${Avgdolphins}`);
      const koalaWon = true;
      // return koalaWon;
    }
  } else {
    return `nobody won not double score`;
  }
}
console.log(checkWinner());



const firend1 = `michael`;
const firend2 = `steven`;
const firend3 = `Juan`;

const friends = [`Michael`, `Steven`, `Peter`];

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);

const tomasz = [`Tomasz`, `Górecki`, 2137 - 2005, `student`, friends];
console.log(tomasz.length);

//excersise
function calcAge(birthYear) {
  return 2137 - birthYear;
}

const years = [1990, 1967, 2123, 2010, 2090];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);



function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% of the world`;
}

const populations = [38, 1114, 7, 18];
if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);



//adding elements
const friends = [`Michael`, `Steven`, `Peter`];
//adding to end
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);
//adding to beggining
friends.unshift(`John`);
console.log(friends);

//removing elements
friends.pop(); //removing last element of the array
const popped = friends.pop(); //it returns value of removed item
console.log(popped);
console.log(friends);

friends.shift(); // deleting first element
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if (friends.includes(`Steven`)) {
  console.log(`You have a friend called Steven`);
}



const neighbours = [
  `Germany`,
  `Russia`,
  `Slovakia`,
  `Czechia`,
  `Ukraine`,
  `Beleraus`,
  `Lithuania`,
];
console.log(neighbours);

neighbours.push(`Utopia`);
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes(`Germany`)) {
  console.log(`propably not the eastern european country`);
} else {
  console.log(`propably  the eastern european country`);
}

neighbours[neighbours.indexOf(`Czechia`)] = `Czech Republic`;
console.log(neighbours);



function percentage(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const tips = [percentage(125), percentage(555), percentage(44)];
console.log(tips);

const totals = [tips[0] + 125, tips[1] + 555, tips[2] + 44];
console.log(totals);

*/

const myCountry = {
  country: `Poland`,
  capital: `Warsaw`,
  language: `Polish`,
  population: 38,
  neigbours: [
    `Germany`,
    `Russia`,
    `Slovakia`,
    `Czechia`,
    `Ukraine`,
    `Beleraus`,
    `Lithuania`,
  ],
};

console.log(myCountry);

const tomasz = {
  firstName: `Tomasz`,
  lastName: `Górecki`,
  age: 2137 - 2120,
  job: `student`,
  friends: [`Michael`, `Peter`, `Steven`],
};

console.log(tomasz);

console.log(tomasz.lastName);
console.log(tomasz[`lastName`]);

const nameKey = `Name`;
console.log(tomasz[`first` + nameKey]);
console.log(tomasz[`last` + nameKey]);

tomasz.location = `Poland`;
tomasz[`twitter`] = `@wojtylashitoast2137`;
console.log(tomasz.location);

console.log(
  `${tomasz.firstName} has ${tomasz.friends.length} friends, and his best friend is called ${tomasz.friends[0]}`
);

console.log(
  `${myCountry.country} has ${
    myCountry.population + 2
  } milions people that speaks ${myCountry.language} and has ${
    myCountry.neigbours.length
  } neigbours and a capital is in ${myCountry.capital} after ${(myCountry[
    "population"
  ] -= 2)}`
);
