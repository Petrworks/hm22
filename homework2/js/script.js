// 1) Створіть три змінні. Задайте першій з них будь-яке числове значення. Друга змінна повинна дорівнювати першій, але збільшена в три рази. Третя змінна повинна дорівнювати сумі перших двох. Виведіть в консоль усі три змінні.

const a = +prompt('enter number 1');
const b = a * 3;
const c = a + b;
console.log(`${a}, ${b}, ${c}`);

const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');

//  2) Cтворіть числові змінні х и y. Значення їх задає користувач через команду prompt(). Підрахуйте добуток, ділення, різницю і суму цих змінних. Результат відобразіть в консолі в форматі повної математичної операції:

const a = +prompt('Enter first number');
const b = +prompt('Enter second number');

console.log(`
  ${a} * ${b} = ${a * b}
  ${a} / ${b} = ${a / b}
  ${a} - ${b} = ${a - b}
  ${a} + ${b} = ${a + b}`);

//  3) Створіть змінну str і задайте їх знамення з prompt. Приведіть строку до верхнього і нижнього регістру, підрахуйте довжину і виведіть ці дані в консоль в наступному форматі (все повинно бути записано в одному console.log()):

const string = prompt(`This is your big string`);

console.log(`You wrote: \"${string}\" \\ it's length ${
  string.length
}\nThis is your big string: ${string.toUpperCase()}
  \t\t\t\tAnd this is a small one: \"${string.toLowerCase()}\"`);

/*  4) В одній пачці папіру 500 листів. Офіс використовує 1200 листів папіру щотиджня. Яку найменшу кількість пачок папіру треба закупити в офіс, щоб вистачило на 8 тижнів?
 Результат відобразіть в консолі (команда console.log()). */

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

sum = (consumptionPerWeek / sheetsInReamPaper) * 8;

console.log(Math.ceil(sum));

/* 5) Напишіть програму, яка рахує скільки порібно заплатити відсоткі від суми по кредиту. Відсоток і суму задає користувач (команда prompt()), результат виводимо в консоль (команда console.log()). Враховуєте, що користувач може відправити 10 або 10.5%. */

const percent = prompt('Enter your percent');
const sum = prompt('Enter your sum');

console.log((sum * parseFloat(percent)) / 100);
