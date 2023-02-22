/* а) Створіть функцію joinColor(), яка обʼєднює всі 3 строки в одну. Функція повинна працювати з будь-якою кількістю вхідних строк.

let colors = joinColor(string1, string2, string3); // Aquamarine Black Blue Brown Chocolate Green Lime Olive Orange Purple Red Tomato Violet White Yellow */

let string1 = 'Aquamarine Black Blue Brown Chocolate ';
let string2 = 'Green Lime Olive Orange Purple ';
let string3 = 'Red Tomato Violet White Yellow';

function joinColor(...arguments) {
  let sumString = arguments.concat();
  return sumString;
}
let colors = joinColor(string1, string2, string3, 'fsfg');
console.log(colors);
