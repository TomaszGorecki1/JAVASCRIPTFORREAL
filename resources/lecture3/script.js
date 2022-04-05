let firstName = "Tomasz";
//console.log(firstName);

let country = "Poland";
let population = 39;

//console.log(country);
//console.log(population);

//1

let javafun = true;
//console.log(javafun);
//console.log(typeof javafun);

javafun = "yes";
//console.log(typeof javafun);
//console.log(javafun);

let year;
//console.log(typeof year);

year = 2137;
//console.log(typeof year);
//console.log(year);

//2

const birthYear = 1991;
//console.log(birthYear);

//3

const language = "Polish";

const now = 2137;
const age = now - 1991;
const ageJuan = now - 2018;
//console.log(age, ageJuan);

//console.log((ageJuan * 2) / 10 + 0.2);

const lastName = "Górecki";
//console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
//x=x+10
x *= 4; //x=x*4
//console.log(x);

//console.log(ageJuan < age);
//console.log(ageJuan > age);
//console.log(ageJuan <= 260);

const isFull = age >= 18;

const populationHalf = population / 2;
population += 1;
//console.log(population);

const isMoreThanFinland = population > 6;
//console.log(isMoreThanFinland + " F I N L A N D");

const isMoreThanAvg = population > 33;
//console.log(isMoreThanAvg + " i s m o r e t h a n ");

let ex, y;
ex = y = 25 - 10 - 5;
//console.log(ex, y);

const averageAge = (age + ageJuan) / 2;
//console.log(averageAge);

//4

const description =
  "Portugal is in Europe, and there is 11 milion people speaking portugese";
//console.log(description);

const massMark = 78,
  massJohn = 92,
  heightMark = 1.69,
  heightJohn = 1.95;
let bmiMark, bmiJohn;
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark);
console.log(bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log("mark has higher bmi : " + markHigherBMI);
