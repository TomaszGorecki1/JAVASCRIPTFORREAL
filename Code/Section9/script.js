'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Event handler

let currentAccount;

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1}</div>
      <div class="movements__value">${mov} EUR</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} Eur`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return i >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}EUR`;
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
  updateUI(currentAccount);
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
    inputLoanAmount.value = ``;
  }
});

createUsernames(accounts);

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //foreach for maps and sets

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//foreach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach(function (movement, index, array) {
//   console.log(movement);
// });

/////////////////////////////////////////////////
///slice
// let arr = [`a`, `b`, `c`, `d`, `e`];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));

// //to copy there are 2 options, they are the same
// console.log(arr.slice());
// console.log([...arr]);
// ///splice
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);
// ///reverse
// arr = [`a`, `b`, `c`, `d`, `e`];
// const arr2 = [`j`, `i`, `h`, `g`, `j`];
// console.log(arr2.reverse());

// //concat
// const letters = arr2.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(`--`));

// const arr = [23, 11, 64];
// console.log(arr.at(0));
// //getting last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// console.log(arr.at(-1));
//CODING CHALLENGE #1
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   let copiedArr = dogsJulia.slice();
//   copiedArr.splice(0, 1);
//   copiedArr.splice(-2, 2);
//   let fullArr = [...copiedArr, ...dogsKate];
//   console.log(fullArr);
//   fullArr.forEach(function (element, index, array) {
//     console.log(
//       `Dog number ${index + 1} is an ${
//         element > 3 ? `adult` : `puppy`
//       } and it is ${element} years old`
//     );
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const eurToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// // console.log(movements);
// // console.log(movementsUsd);

// const movementsUsdfor = [];
// for (const mov of movements) movementsUsdfor.push(mov * eurToUsd);
// // console.log(movementsUsdfor);

// const movementsUsd2 = movements.map(mov => mov * eurToUsd);

// const movementDescriptions = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? `deposited` : `Withdrew`
//   } ${Math.abs(mov)}`;
// });
// // console.log(movementDescriptions);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const depostiFor = [];
// ('');
// for (const mov of movements) if (mov > 0) depostiFor.push(mov);
// console.log(depostiFor);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawals);

// //accumulator => snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);
// CODING CHALLENGE #1
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   let copiedArr = dogsJulia.slice();
//   copiedArr.splice(0, 1);
//   copiedArr.splice(-2, 2);
//   let fullArr = [...copiedArr, ...dogsKate];
//   console.log(fullArr);
//   fullArr.forEach(function (element, index, array) {
//     console.log(
//       `Dog number ${index + 1} is an ${
//         element > 3 ? `adult` : `puppy`
//       } and it is ${element} years old`
//     );
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//coding challenge #2
// const array = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = function (arr) {
//   //for each array komórka
//   // check if is older than 2 years
//   console.log(arr);
//   const dogsMoreThan2 = arr.filter(function (mov) {
//     return mov > 2;
//   });
//   const dogsLessThan2 = arr.filter(function (mov) {
//     return mov <= 2;
//   });
//   console.log(dogsMoreThan2);
//   console.log(dogsLessThan2);
//   const humanAge1 = dogsLessThan2.map(function (age) {
//     return age * 2;
//   });
//   console.log(humanAge1);
//   const humanAge2 = dogsMoreThan2.map(function (age) {
//     return 16 + age * 4;
//   });
//   console.log(humanAge2);
//   const final = [...humanAge1, ...humanAge2];
//   const finalMoreThan18 = final.filter(function (mov) {
//     return mov >= 18;
//   });
//   console.log(finalMoreThan18);
//   let avg;
//   for (let i = 0; i < finalMoreThan18.length - 1; i++) {
//     avg = finalMoreThan18[i] + finalMoreThan18[i + 1];
//     avg = avg / finalMoreThan18.length;
//   }
//   console.log(avg);
// };
// calcAverageHumanAge(array);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);
// console.log(accounts);

// const account = accounts.find(acc => acc.owner === `Jessica Davis`);
// console.log(account);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.includes(-130));
// const anyDeposits = movements.some(mov => mov > 5000);
// console.log(anyDeposits);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.every(mov => mov > 0));
// // console.log(account4.movemets.every(mov => mov > 0));

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// const arrDeep = [[1, [2, 3]], [[4, 5], 6], 7, 8];
// console.log(arrDeep.flat(2));
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(accountMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// const owners = [`Tomasz`, `Zach`, `Adam`, `Martha`];
// // console.log(owners.sort());
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// movements.sort((a, b) => a - b);
// console.log(movements);

// const x = new Array(7);
// console.log(x);

// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// //array from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener(`click`, function () {
//   const movementsUi = Array.from(
//     document.querySelector('.movements__value'),
//     el => Number(el.textContent.replace('EUR', ''))
//   );
//   console.log(movementsUi.map());
// });

//////////////////////////////////////////////////////////////////////////////
// array methods practice

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;
// // console.log(numDeposits1000);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// console.log(numDeposits1000);

// //3

// const { deposits, withdrwals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrwals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrwals: 0 }
//   );
// console.log(deposits, withdrwals);

// //4

// const convertTitleCase = function (title) {
//   const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     );
//   return titleCase;
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but n ot too long'));
// // console.log(convertTitleCase('and here is another title with an EXMAPLE'));

// //CODING CHALLENGE #4
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
// //1
// dogs.forEach(function (dog) {
//   return (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
// });
// //2
// dogs.forEach(function (juan) {
//   if (juan.owners.includes('Sarah')) {
//     juan.recFood < juan.curFood
//       ? console.log(`${juan.owners} dog eat too much`)
//       : console.log(`${juan.owners} dog eat too litlle`);
//   }
// });
// //3
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);
// //4
// console.log(`${ownersEatTooMuch.join(` and `)} dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(` and `)} dogs eat too little!`);
// //5
// dogs.forEach(element => {
//   if (element.curFood === element.recFood) console.log(`true`);
//   else console.log(`false`);
// });
// //6
// const checkEatingOkay = dog => dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay));
// //7
// console.log(dogs.filter(checkEatingOkay));
// //8
// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);
