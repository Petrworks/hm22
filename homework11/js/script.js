/* а) Створіть функцію joinColor(), яка обʼєднює всі 3 строки в одну. Функція повинна працювати з будь-якою кількістю вхідних строк.

let colors = joinColor(string1, string2, string3); // Aquamarine Black Blue Brown Chocolate Green Lime Olive Orange Purple Red Tomato Violet White Yellow */

let string1 = 'Aquamarine Black Blue Brown Chocolate ';
let string2 = 'Green Lime Olive Orange Purple ';
let string3 = 'Red Tomato Violet White Yellow';

function joinColor(...arguments) {
  // let concatString = arguments;
  let joinString = arguments.join('');
  return joinString;
}
let colors = joinColor(string1, string2, string3);
console.log(colors);

/* b) Створіть функцію indexColor(), яка повертає індекс першого входження вхідної строки в строці. Функція приймає два параметри:

строку, в якої виконується пошук (наприклаж colors);
строку, індекс якої, потрібно знайти
let greenIndex = indexColor(colors, 'Green'); // 38 */

function indexColor(colors, color) {
  console.log(colors.indexOf(color));
  return colors.indexOf(color);
}
let greenIndex = indexColor(colors, 'Green');

/* c) Створіть функцію isColorIncludes(), яка перевіряє чи є такий колір в заданій строці чи ні. Зверніть увагу, що функція повинна працювати з будь-яким регістром. */

function isColorIncludes(colors, color) {
  let colIncl = color.toLowerCase();
  console.log(colIncl);
  let newColIncl = colors.includes(colIncl);

  return newColIncl;
}

console.log(isColorIncludes(colors, 'Black')); // true
console.log(isColorIncludes(colors, 'BlAcK')); // true
console.log(isColorIncludes(colors, 'Lilac')); // false */

/* d) Створіть функцію replaceColor(), яка знаходить строку в заданій строці і замінює її на іншу

let result = replaceColor(string2, 'Olive', 'Grey'); // "Green Lime Grey Orange Purple " */

function replaceColor(string, elem1, elem2) {
  return string.replace(elem1, elem2);
}
let result = replaceColor(string2, 'Olive', 'Grey');
console.log(result);

/* e) Створіть функцію splitColors(colors, numbers), яка розбиває вхідну строку на окремі слова і повертає тільки ті слова, кількість літер яких не менше ніж число, яке передане в якості другого аргументу функції. */

function splitColors(colors, numbers) {
  let splits = colors
    .split(colors)
    .filter((item) => item.length >= numbers)
    .toString();

  console.log(splits);
  return splits;
}
let filteredColors = splitColors(string1, 6);

/* f) Створіть функцію calculateSpaces(), яка рахує кількість пробілів в строці. */

function calculateSpaces(string) {
  return string.split(' ').length - 1;
}
let count = calculateSpaces(string3);
console.log(count); // 4
