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
let symbol = '.#';

for (let i = 1; i <= value; i++) {
  symbol += '.#';
}
console.log(symbol);

/*  3) Напишіть програму, яка питає у користувача число і сумує всі непарні числа до цього числа включно.

Якщо користувач ввів не число або відʼємне число чи 0, визивати команду prompt() з текстом "Invalid. You should enter a number bigger than zero" до тих пір поки вірний формат даних не буде введений користувачем.

Результат відобразіть в консолі.  */

let num = prompt('Enter your number');
let sum = 0;
let i = 1;

while (isNaN(num) || num <= 0) {
  num = prompt('Invalid. You should enter a number bigger than zero');
  while ((isFinite(num) && i % 2 !== 0, i <= num)) {
    i++;
  }
  console.log((sum = sum + i));
}

//   if (isFinite(num) && i % 2 !== 0) {
//     sum = sum + i;
//   } else {
//     prompt('Invalid. You should enter a number bigger than zero');
//   }
// }
// console.log(sum);
// isNaN(num) || num <= 0;
