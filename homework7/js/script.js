/* 1) Напишіть програму, яка продемонструє роботу з масивом. Створіть масив із восьми елементів:

'455' 87.15 true undefined null 'false' [] {}
Виведіть інформацію о типі даних кожного елемента в консолі. Додайте значення 7 до кожного елементу масива і виведіть отримані значення в консолі.*/

const array = ['455', 87.15, true, undefined, null, 'false', [], {}];
for (let key in array) {
  console.log(key);
  console.log(typeof key);
}

for (let i = 0; i <= array.length; i++) {
  console.log(array[i] + 7);
}

/* 2) Напишіть програму, яка питає у користувача число і створює масив numbers з випадкових цілих чисел в діапазоні від 0 до 10, довжина якого дорівнює числу, яке ввів користувач.

Виведіть створений масив numbers в консолі.
Скопіюйте массив numbers в новий масив. Кожен третій елемент нового масиву помножте на 3.
Виведіть новостворений масив в консолі.*/

let array2 = [];
const sizeArr = prompt();
for (i = 0; i < sizeArr; i++) {
  array2.push(Math.round(Math.random() * 10));
}
console.log(array2);

let array2Copy = [...array2];
for (let i = 0; i <= array2Copy.length; i += 3) {
  array2Copy[i] = array2Copy[i] * 3;
}
console.log(array2Copy);

/* а) Створіть массив, який складається з повних імен всіх співробітників.
const fullNames = /* your code / ['Karan Duffy', 'Brax Dalton', 'Jody Lam', ...] */

const fullNames = [];

for (let i = 0; i < employee.length; i++) {
  fullNames[i] = employee[i].name + employee[i].surname;
}

console.log(fullNames);

/* b) Знайдіть середнє значення всіх зарплат співробітників.
const average = /* some number */

let money = 0;

for (let i = 0; i <= 80; i++) {
  money += i;
}
console.log(money);
