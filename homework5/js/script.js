/*  1) Напишіть програму, яка питає у користувача його імʼя і виводить в консолі текстове привітання.

Happy birthday to you
Happy birthday to you
Happy birthday, dear <name>
Happy birthday to you
*/

const yourName = prompt('Enter your name');

console.log(`Happy birthday to you
Happy birthday to you
Happy birthday, dear ${yourName}
Happy birthday to you`);

/* 2) Сформуйте строку '.#.#.#.#.#.#.#' за допомогою циклу for, де необхідну кількість повторів символів '.#' задає користувач через команду prompt(). */

const value = prompt();
const symb = '.#';

for (let i = 1; i <= value; i++) {
  console.log(`${i * symb}`);
  // console.log(.#.repeat(i));
}
