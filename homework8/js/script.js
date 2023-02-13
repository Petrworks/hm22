/* 1) Напишіть функцію parseDate(), яка показує поточну дату і час чітко в заданому форматі.

для дати (Thu Jan 06 2022 22:03:07) - new Date(2022, 0, 6, 22, 3, 7) 
Today is: Thursday.
Current time is: 10 PM : 03 : 07 */

function parseDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();
  let options = { weekday: 'long' };
  let optionsHour = { hour: '2-digit' };

  return `Today is: ${new Intl.DateTimeFormat('en-US', options).format(date)}.
  Current time is: ${new Intl.DateTimeFormat('en-Us', optionsHour).format(
    date
  )} : ${'0' + min} : ${'0' + second}
  `;
}

const dateOf = new Date(2022, 0, 6, 22, 3, 7);
console.log(parseDate(dateOf));

// function log(a, b, c, d, e, f) {
//   console.log(a + b);
// }

// log(5, 4);
// log(5, 7);

/* 2) Напишіть функцію getRandomInteger(min, max), яка повертає ціле число в заданому діапазоні чисел, які передані в аргументах функції.

Напишіть програму, яка питає у користувача ціле число і порівнює його зі створеним числом за допомогою функції getRandomInteger.

Якщо користувач ввів невірне число, виведіть в консоль повідомлення про помилку.
Якщо числа співпадають, вивести в консоль Good work, якщо ні - Not matched. */

function getRandomInteger(min, max) {
  let randomInteg = Math.floor(Math.random() * (max - min) + min);

  const value = prompt('Enter number', '3');

  // if (value.length && isFinite.value) {
  if (Number(value) === randomInteg) {
    console.log(value);
    console.log(`Good work`);
  } else if (Number(value) !== randomInteg) {
    console.log(`Not matched`);
    // }
    console.log(randomInteg);
  }
}
getRandomInteger(3, 4);

/* 3) Напишіть функцію getDecimalNumber(arr), яка приймає в якості аргументу масив з чисел 0 або 1, і повертає число в десятичній системі еквівалентне заданому.

Наприклад, массив [0, 0, 0, 1] розглядається як 0001 і дорівнює 1.

Приклади для перевірки:
getDecimalNumber([0, 0, 0, 1]) // 1
getDecimalNumber([0, 0, 1, 0]) // 2
getDecimalNumber([1, 1, 1, 1]) // 15
getDecimalNumber([1, 1, 1, 0, 0, 1]) // 57*/

const arr = [0, 0, 0, 1];
let i = '';

function getDecimalNumber() {
  let stringNum = '';
  for (let i of arr) {
    stringNum += i;
  }
  console.log(parseInt(stringNum, 10));
  return parseInt(stringNum, 10);
}
getDecimalNumber(arr);

/* 4) Напишіть програму, яка питає у користувача число і ділить його на 2 стільки разів, поки воно не буде <= 50. Виведіть в консоль фінальне число і кількість операцій, які знадобились, щоб досягти цього числа.

Приклад виконання програми для number = 100500;
Initial number is: 100500;
Attempts: 11;
Final number is: 49.072265625; */

let numDiv = parseInt(prompt('Enter number'));

function resultDiv() {
  let iterationNum = 0;

  if (numDiv >= 50) {
    while (numDiv >= 50) {
      numDiv /= 2;
      ++iterationNum;
    }
    console.log(`Initial number is: ${numDiv};
    Attempts: ${iterationNum}`);
  }
  return resultDiv;
}
resultDiv(numDiv);
