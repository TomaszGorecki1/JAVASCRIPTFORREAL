`use strict`;

//liczenie sredniej i wyswietlenie jej w domie
//funkcja która odpala
//po kliknieciu submit daje wartosc obu inputów do zmiennej
//zeruje wartosc inputów
//funkcja która odpala
//po kliknieci calc i liczy srednia wazona za razem podając ją do domu zamiast 0,
let insertedGrade = 0;
let insertedWeight = 0;
let weightSum = 0;
let gradeSum = 0;
let gradeMultiply = 0;
let avg = 0;

document.querySelector(`.submit`).addEventListener('click', function () {
  insertedGrade = Number(document.querySelector(`.grade`).value);
  insertedWeight = Number(document.querySelector(`.weight`).value);

  gradeMultiply = insertedGrade * insertedWeight;
  gradeSum += gradeMultiply;
  weightSum += insertedWeight;
  avg = gradeSum / weightSum;
  console.log(avg);

  document.querySelector(`.avg`).textContent = Number(
    Math.round(avg + 'e2') + 'e-2'
  );

  document.querySelector(`.grade`).value = '';
  document.querySelector(`.weight`).value = '';
});

const info = document.querySelector(`.info`);
const overlay = document.querySelector(`.overlay`);
const btnCloseInfo = document.querySelector(`.close-info`);
const btnsOpenInfo = document.querySelectorAll(`.show-info`);

const openInfo = function () {
  info.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
  console.log(`open info`);
};
const closeInfo = function () {
  info.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
  console.log(`close info`);
};

for (let i = 0; i < btnsOpenInfo.length; i++) {
  btnsOpenInfo[i].addEventListener(`click`, openInfo);
  btnCloseInfo.addEventListener(`click`, closeInfo);
  overlay.addEventListener(`click`, closeInfo);
  console.log(`open info`);
}

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !info.classList.contains(`hidden`)) {
    closeModal();
    console.log(`open info`);
  }
});
