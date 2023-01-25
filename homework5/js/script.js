/*  1) Напишіть програму, яка питає у користувача його імʼя і виводить в консолі текстове привітання.

Happy birthday to you
Happy birthday to you
Happy birthday, dear <name>
Happy birthday to you
*/

const yourName = prompt('Enter your name');
let str = '';

for (i = 1; i <= 4; i++) {
  if (i == 3) str += 'Happy birthday, dear' + yourName + '\n';
  else str += 'Happy birthday to you\n';
}
console.log(str);

/* 2) Сформуйте строку '.#.#.#.#.#.#.#' за допомогою циклу for, де необхідну кількість повторів символів '.#' задає користувач через команду prompt(). */

const value = prompt();
let symbol = '';

for (let i = 1; i <= value; i++) {
  symbol += '.#';
}
console.log(symbol);

/*  3) Напишіть програму, яка питає у користувача число і сумує всі непарні числа до цього числа включно.

Якщо користувач ввів не число або відʼємне число чи 0, визивати команду prompt() з текстом "Invalid. You should enter a number bigger than zero" до тих пір поки вірний формат даних не буде введений користувачем.

Результат відобразіть в консолі.  */

// let num = prompt('Enter your number');

// while (isNaN(num) || num <= 0) {
//   num = prompt('Invalid. You should enter a number bigger than zero');
// isFinite(num) &&

const num = prompt('Enter your number');
let sum = 0;

for (let i = 1; i <= num; i++) {
  if (isFinite(num) && i % 2 !== 0) {
    sum = sum + i;
  }
}
console.log(sum);

/*
4) Напишіть нескінченний цикл, який закінчується командою break, коли Math.random() > 0.7. Виведіть в консоль число, на якому переривається цикл та відобразіть в консолі кількість ітерацій циклу.

Loop was finished because of: <number>
Number of attempts: <number>*/

randomNum = Math.random();

for (let i = 0; true; i++) {
  if (Math.random() > 0.7) {
    console.log(
      `Loop was finished because of: ${randomNum}, Number of attempts: ${i}`
    );
    break;
  }
}

/* 5) Напишіть цикл від 1 до 50, в якому будуть виводитися числа по черзі від 1 до 50, при цьому:

Якщо число ділиться на 3 без залишку, то виведіть не це число, а слово 'Fizz';
Якщо число ділиться на 5 без залишку, то виведіть не це число, а слово 'Buzz';
Якщо число ділиться і на 3 і на 5 одночасно, то виведіть не це число, а слово 'FizzBuzz'; */

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  }
  if (i % 5 === 0) {
    console.log('Buzz');
  }
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
  }
}

/* 6) Напишіть програму, яка знайде всі роки, коли 1 січня випадає на неділю у період між 2015 та 2050 роками включно (зверніть увагу, що 1 січня в лапках).
"1st of January" is being a Sunday in <year> */

for (let year = 2015; year <= 2050; year++) {
  const searchYear = new Date(year, 0, 1);
  if (searchYear.getDay() === 0)
    console.log('1st January is being a Sunday  ' + year);
}
