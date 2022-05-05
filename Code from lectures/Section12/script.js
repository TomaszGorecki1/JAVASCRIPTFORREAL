'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const tomasz = new Person(`Tomasz`, 2005);
// console.log(tomasz);

// const juan = new Person(`Juan`, 2137);
// console.log(juan);

// console.log(tomasz instanceof Person);

// Person.prototype.calcAge = function () {
//   console.log(2137 - this.birthYear);
// };

// tomasz.calcAge();

// Person.prototype.species = `Homo Sapiens`;
// console.log(tomasz.species, juan.species);
// console.log(tomasz.hasOwnProperty(`species`));

// console.log(tomasz.__proto__);
// console.log(tomasz.__proto__.__proto__);
// console.log(tomasz.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 6, 12, 5, 2];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector(`h1`);
// console.dir(x => x + 1);

// const Car = function (marka, speed) {
//   this.speed = speed;
//   this.mark = marka;
// };
// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };
// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const bmw = new Car(`BMW`, 120);
// const mercedes = new Car(`mercedes`, 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// console.log(bmw);
// console.log(mercedes);

//class expression

// const PersonCl1= class{

// }

//class declartaion
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //methods added to .protoype
//   calcAge() {
//     console.log(2137 - this.birthYear);
//   }
// }
// const jessica = new PersonCl(`Jessica`, 1996);
// console.log(jessica);
// jessica.calcAge();

// const account = {
//   owner: `Tomasz`,
//   movements: [200, 300, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// // console.log(account.movements);
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

// console.log(steven);

// steven.name = `Steven`;
// steven.birthYear = 2002;
// steven.calcAge();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2137 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   //   this.firstName = firstName;
//   //   this.birthYear = birthYear;
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student(`Mike`, 2020, `Computer Science`);
// console.log(mike);
// mike.introduce();
// Student.prototype.constructior = Student;
///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
//

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for openinag account, ${owner}`);
//   }

//   deposit(val) {
//     this.movements.push(val);
//     return this;
//   }
//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account(`Jonas`, `Eur`, 1111);
// console.log(acc1);

// acc1.deposit(250);
// acc1.withdrawal(140);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);

// //public fields
// //private fields
// //public methods
// //private methods

// acc1.deposit(300).deposit(500).withdrawal(35);

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
