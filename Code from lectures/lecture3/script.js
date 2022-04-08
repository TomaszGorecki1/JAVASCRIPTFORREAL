/*
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

      const firstName = "Tomasz";
      const job = "Student";
      const birthYear = 2005;
      const year = 2022;

      const tomasz =
        "I'm " + firstName + ",a " + (year - birthYear) + " years old " + job + "!";
      console.log(tomasz);

      const tomaszNew = ` I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
      console.log(tomaszNew);

      console.log(`String
      multiple
      lines`);

      const description = `Portugal is in Europe, and there is 11 milion people speaking portugese`;



      const age = 15;
      const isOldEnougch = age >= 18;

      if (isOldEnougch) {
        console.log(`Juan can start driving license 🦖`);
      } else {
        const yearsLeft = 18 - age;
        console.log(
          `Juan is too young. You have to wait about ${yearsLeft} years to start`
        );
      }

      const birthYear = 2005;
      let century;

      if (birthYear <= 2000) {
        century = 20;
      } else {
        century = 21;
      }
      console.log(century);


      const population = 39;
      if (population > 33) {
        console.log(
          `Poland's population is ${population - 33} milions above average`
        );
      } else {
        console.log(
          `Poland's population is ${33 - population} milions below the average`
        );
      }


      ///coding challenge #2
      const massMark = 95,
        massJohn = 85,
        heightMark = 1.88,
        heightJohn = 1.76;
      let bmiMark, bmiJohn;
      bmiMark = massMark / (heightMark * heightMark);
      bmiJohn = massJohn / (heightJohn * heightJohn);
      if (bmiJohn > bmiMark) {
        console.log(`John has ${bmiJohn - bmiMark} points higher bmi than mark`);
      } else {
        console.log(`Mark has ${bmiMark - bmiJohn} points higher bmi than John`);
      }



      //type convertion
      const inputYear = `2005`;
      console.log(Number(inputYear), inputYear);
      console.log(Number(inputYear) + 18);

      console.log(Number(`Tomasz`));
      console.log(typeof NaN);

      console.log(String(23), 23);

      //type corection

      console.log("I am " + 17 + " years old");
      console.log("23" - "10" - 3);
      console.log("23" / "2");



      console.log("9" - "5"); //4
      console.log("19" - "13" + "17"); //617
      console.log("19" - "13" + 17); //23
      console.log("123" < 57); //nein
      console.log(5 + 6 + "4" + 9 - 4 - 2); //1143



      //5 flasy valutes: 0, '', undefined, null, NaN

      console.log(Boolean(0));
      console.log(Boolean(undefined));
      console.log(Boolean("Tomasz"));
      console.log(Boolean({ NaN }));
      console.log(Boolean(""));

      const money = 100;
      if (money) {
        console.log("Don't spend it all ;)");
      } else {
        console.log("You should get a job!");
      }

      let height = 0;
      if (height) {
        console.log("height is defined");
      } else {
        console.log("height is undefined");
      }

const age = "18";

if (age === 18) console.log("You are an adult my guy triple =");

if (age == 18) console.log("You are an adult my guy double =");

const favourite = Number(prompt("what is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("cool! 23 is a great number");
} else if (favourite === 7) {
  console.log("7 guda numberos too");
} else {
  console.log("your number sucks");
}

if (favourite !== 23) {
  console.log("why not 23");
}
*/

let numNeighbours = Number(
  prompt("How many neighbour countries does your country have")
);
if (numNeighbours === 1) {
  console.log("only 1 border");
} else if (numNeighbours > 1) {
  console.log("more than 1 border");
} else if (numNeighbours === 0) {
  console.log("no borders");
} else {
  console.log("unsporetd value");
}
