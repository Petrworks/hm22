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
const sizeArr = prompt('', 5);
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
  fullNames[i] = employee[i].name + ' ' + employee[i].surname;
}

console.log(fullNames);

/* b) Знайдіть середнє значення всіх зарплат співробітників.
const average = /* some number */

let sumSalary = 0;

for (let i = 0; i < employee.length; i++) {
  sumSalary += employee[i].salary;
}
const average = sumSalary / employee.length;
console.log(average);

/* с) Виведіть в консоль імʼя чоловіка-пільговика (ключ isPrivileges=true) з самою великою зарплатою.

const maxPrivilegesMan = /* firstName lastName */

let namePrivileg = [];

for (let i = 0; i <= employee.length - 1; i++) {
  if (employee.isPrivileges === 'true' && employee.gender === 'male') {
    namePrivileg[i] = employee[i].name + ' ' + employee[i].surname;
  }
}
console.log(namePrivileg);
const maxPrivilegesMan = employee[i].name + ' ' + employee[i].surname;
console.log(maxPrivilegesMan);

/* e) Виведіть в консоль інформацію, скільки всього заробили співробітники за весь час роботи в одній строці. Формат відповіді: <імʼя прізвище> - <сума>.

const result = /* your code 
 Karan Duffy - 10100
Brax Dalton - 14400
Jody Lam - 1440 */
{
  let fullNames = [];

  for (let i = 0; i < employee.length; i++) {
    fullNames[i] =
      employee[i].name +
      ' ' +
      employee[i].surname +
      ' ' +
      '-' +
      ' ' +
      employee[i].salary * employee[i].workExperience;
  }
  const result = fullNames.toString();
  console.log(result);
}
