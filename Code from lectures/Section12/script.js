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
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
// }
// const martha = new StudentCl(`Martha Jones`, 2012, 'Computer science');
// console.log(martha);

// martha.calcAge();
