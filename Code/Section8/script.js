'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //old es5
//   //    numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`, 2, 800);

// const flight = `LH234`;
// const tomasz = {
//   name: `Tomasz Górecki`,
//   passport: 212742069,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = `LH999`;
//   passenger.name = `Mr. ` + passenger.name;
//   if (passenger.passport === 212742069) {
//     alert(`Check in`);
//   } else {
//     alert(`Wrong passport`);
//   }
// };
// checkIn(flight, tomasz);
// console.log(flight);
// console.log(tomasz);

// //Is the same as doing...
// const flightNum = flight;
// const passenger = tomasz;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000);
// };

// newPassport(tomasz);
// checkIn(flight, tomasz);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(` `);
// };
// //higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by ${fn.name}`);
// };
// // transformer(`Jan papuez 2`, upperFirstWord);
// // transformer(`Jan papuez 2`, oneWord);

// const high5 = function () {
//   console.log(`JUAN`);
// };
// [`Tomasz`, `Martha`, `Adam`].forEach(high5);
//

//const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`hey`);
// greeterHey(`Tomasz`);

// greet(`Siema`)(`Tomasz`);

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet(`hey`);
// greeterHey(`Tomasz`);
// // greet(`Siema`)(`Tomasz`);

// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: `Lh`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} for flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, `Tomasz Górecki`);
// lufthansa.book(635, `Timothy George`);
// console.log(lufthansa);

// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };

// const book = lufthansa.book;
// //broken
// // console.log(23, `Sarah Williams`);
// //not broken
// book.call(eurowings, 23, `Sarah Williams`);
// console.log(eurowings);

// book.call(lufthansa, 239, `Mary Cooper`);
// console.log(lufthansa);

// const swiss = {
//   airline: `Swiss Air Lines`,
//   iataCode: `LX`,
//   bookings: [],
// };

// book.call(swiss, 583, `Mary Cooper`);
// console.log(swiss);

// //Apply

// const flightData = [583, `George Cooper`];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, `Steven Williams`);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`Tomasz Górecki`);
// bookEW23(`Juan Pablo`);

// //With event listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(`.buy`)
//   .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// //partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(190));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(190));

// CODING CHALLENGE #1

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let userInput = Number(
//       prompt(
//         `${this.question}\n ${this.options.join(`\n`)}\n(write option number)`
//       )
//     );

//     if (userInput === 0) {
//       this.answers[0] = 1;
//     } else if (userInput === 1) {
//       this.answers[1] = 1;
//     } else if (userInput === 2) {
//       this.answers[2] = 1;
//     } else if (userInput === 3) {
//       this.answers[3] = 1;
//     } else {
//       alert(`wrong data`);
//     }

//     this.displayResults();
//     this.displayResults(`string`);
//   },
//   displayResults(type = `array`) {
//     if (type === `array`) {
//       console.log(this.answers);
//     } else if (type === `string`) {
//       console.log(`Poll results are ${this.answers.join(`, `)}`);
//     }
//   },
// };

// document
//   .querySelector(`.poll`)
//   .addEventListener(`.click`, poll.registerNewAnswer());

// poll.displayResults.call({ answers: [2, 3, 4, 4] }, `string`);

// // poll.registerNewAnswer();

// const runOnce = function () {
//   console.log(`This will never run again`);
// };
// runOnce();

// (function () {
//   console.log(`This will never run again`);
// })();

// (() => console.log(`This also will never rung again`))();

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// //reasignnign
// h();
// f();

// //EXAMPLE 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// coding challenge#2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();
