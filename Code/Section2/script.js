'use strict';
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



const tomasz = {
  firstName: `Tomasz`,
  lastName: `Górecki`,
  birthYear: 2120,
  job: `student`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDrivers: true,
  calcAge: function () {
    this.age = 2137 - this.birthYear;
    return this.age;
  },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2137 - this.birthYear;
  // },
  getSummary: function () {
    if (this.hasDrivers === true) {
      return `Tomasz is a ${this.calcAge()}-years old ${
        this.job
      }, and he has a driver license`;
    } else {
      return `Tomasz is a ${this.calcAge()}-years old ${
        this.job
      }, and he has not driver license`;
    }
  },
};

console.log(tomasz.calcAge());
console.log(tomasz.getSummary());



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
  isIsland: function () {
    if (this.neigbours.length === 0) {
      return (this.island = true);
    } else {
      return (this.island = false);
    }
  },
  decribe: function () {
    console.log(
      `${this.country} has ${this.population} milions of people. It's capital is in ${this.capital} and spoken language is ${this.language}`
    );
  },
};

myCountry.decribe();
console.log(myCountry.isIsland());



const mark = {
  firstName: `Mark`,
  lastName: `Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};
console.log(mark.calcBMI());
console.log(mark.bmi);
const john = {
  firstName: `John`,
  lastName: `Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};
console.log(john.calcBMI());
console.log(john.bmi);

if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName} BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`
  );
} else {
  console.log(
    `${john.firstName} BMI (${john.bmi}) is lower than ${mark.firstName}'s (${mark.bmi})`
  );
}
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Juan reapeated ${rep}`);
}

for (let voter = 1; voter < 50; voter++) {
  console.log(`voter ${voter} is voting`);
}

const tomaszArray = [
  `Tomasz`,
  `Górecki`,
  2137 - 2120,
  `student`,
  [`Michael`, `Peter`, `Steven`],
  true,
];

const types = [];

for (let i = 0; i < tomaszArray.length; i++) {
  console.log(tomaszArray[i], typeof tomaszArray[i]);

  // types[i] = typeof tomaszArray[i];
  types.push(typeof tomaszArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2022 - years[i];
}

for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}

//continue




//only strings
for (let i = 0; i < tomaszArray.length; i++) {
  if (typeof tomaszArray[i] !== `string`) {
    continue;
  }
  console.log(tomaszArray[i], typeof tomaszArray[i]);
}



//break wtih number
for (let i = 0; i < tomaszArray.length; i++) {
  if (typeof tomaszArray[i] === `number`) {
    break;
  }
  console.log(tomaszArray[i], typeof tomaszArray[i]);
}


const populations = [38, 1114, 7, 18];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2[i] = (populations[i] / 7000) * 100;
}



const tomasz = [
  `Tomasz`,
  `Górecki`,
  2137 - 2120,
  `student`,
  [`Michael`, `Peter`, `Steven`],
];

for (let i = tomasz.length - 1; i >= 0; i--) {
  console.log(tomasz[i]);
}

for (let execersise = 1; execersise < 4; execersise++) {
  console.log(`1st ecersisce ${execersise}`);
  for (let excersise2 = 1; excersise2 < 6; excersise2++) {
    console.log(`2nd${execersise}`);
  }
}


const listOfNeighbours2 = [
  [`Canada`, `Mexico`],
  [`Spain`],
  [`Norway`, `Sweeden`, `Russia`],
];

for (let i = 0; i < listOfNeighbours2.length; i++) {
  for (let y = 0; y < listOfNeighbours2[i].length; y++) {
    console.log(`Neigbour: ${listOfNeighbours2[i][y]}`);
  }
}



// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`juan ${rep}`);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(`juan ${i}`);
//   i++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`numba` + dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop ended`);
}



const populations = [10, 1441, 332, 83];
const percentages2 = [];
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% of the world`;
}
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);

*/
function percentage(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = percentage(bills[i]);
  totals[i] = percentage(bills[i]) + bills[i];
}
console.log(tips);
console.log(totals);

console.log(calcAverage(totals));
